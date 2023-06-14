import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../helpers/scale';

import Icon from 'react-native-vector-icons/Feather';

export default function CustomeTextInput({label, placeholder, placeholderTextColor,icon}) {
  return (
    <View style={{marginVertical:verticalScale(10)}}>

    {label && <Text style={{marginBottom:verticalScale(5)}}>{label}</Text> }

    <View style={styles.inputContainer}>
        <TextInput
            placeholder = {placeholder}
            placeholderTextColor={'#A9A9A9'}
            style={{
                flex:1,
                height:verticalScale(50),
                paddingHorizontal:horizontalScale(20)
            }}
        />

        {icon &&
            <View style={styles.iconContainer}>
                 <Icon name={icon} size={moderateScale(20)} color="grey" />
            </View>
        }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        width:'100%', 
        borderWidth:1, 
        borderColor:'lightgrey', 
        display:'flex', 
        flexDirection:'row', 
        borderRadius:moderateScale(5)
    },
    iconContainer: {
        width:horizontalScale(50), 
        justifyContent:'center', 
        alignItems:'center'
    }
})
