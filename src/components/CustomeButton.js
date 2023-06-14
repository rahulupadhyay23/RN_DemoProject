import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { moderateScale, verticalScale } from '../helpers/scale'

export default function CustomeButton({title, backgroundColor, color, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, {backgroundColor}]}>
        <Text style={[styles.buttonTextStyle, {color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width:'100%',
        height:verticalScale(60), 
        justifyContent:'center',
        alignItems:'center',
        marginVertical:verticalScale(20),
        borderRadius:moderateScale(7)
    },
    buttonTextStyle: {
        fontSize:moderateScale(16),
        color:'red'
    }
})
