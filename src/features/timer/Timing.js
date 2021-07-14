import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';



export const Timing = ({ onChangeTime }) => {

  return(
    <Fragment>
      <View style={styles.timingButton}>
        
        <RoundedButton 
          size={75} 
          title="10"
          onPress={() => onChangeTime(10)}
        />

         <RoundedButton 
          size={75} 
          title="15"
          onPress={() => onChangeTime(15)}
        />

         <RoundedButton 
          size={75} 
          title="20"
          onPress={() => onChangeTime(20)}
        />

      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});