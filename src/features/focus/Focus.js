import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {

  const [subject, setSubject] = React.useState( null );

  return (
    <View style={styles.container}>
     
      <View style={styles.innerContainer}>
        
        <Text style={styles.title}>
          What would like to focus?
        </Text>
        
        <View style={styles.inputContainer}>
        
          <TextInput 
            style={{flex: 1, marginRight: spacing.md}} 
            onSubmitEditing={
              ({ nativeEvent }) => {
                setSubject( nativeEvent.text )
              }
            }
          />
          
          <RoundedButton 
            title='+' 
            size={50}
            onPress={() => { 
              addSubject( subject ) 
              }
            }
          />

        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:0.5,    
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center'
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center'
  },
  
});