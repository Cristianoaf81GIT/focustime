import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { CountDown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Timing } from './Timing';


const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject,onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [minutes,setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState( false );
  const [progress, setProgress] = useState( 1 );


  const onProgress = ( progress ) => {
    setProgress( progress );
  }

  const changeTime = (min) => {
    setMinutes( min );
    setProgress( 1 );
    setIsStarted( false );   
  }

  const onEnd =() => {
    vibrate();
    setMinutes( DEFAULT_TIME );
    setProgress( 1 );
    setIsStarted( false );
    onTimerEnd();
  }

  const vibrate = () => {
    if(Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(),1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(5000); // android
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        
        <CountDown 
          minutes={minutes} 
          isPaused={!isStarted} 
          onProgress={ onProgress }
          onEnd={onEnd}
        />

      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar 
          progress={ progress }
          color="#5E84E2"
          style={{height: 10}}
        />
      </View>
      
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime}/>
      </View>

      <View style={styles.buttonWrapper}>
        <RoundedButton 
          title={isStarted ? "pause" : "start"} 
          onPress={ () => { setIsStarted(!isStarted)} }
        />
      </View>
     
     <View style={styles.clearSubject}>
      <RoundedButton 
          title="-" 
          size={50}
          onPress={ () => clearSubject() }
        />
     </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.4,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25
  }
});
