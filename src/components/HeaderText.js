import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { moderateScale, verticalScale } from '../helpers/scale'

export default function HeaderText({title}) {
  return (
    <Text style={styles.textStyle}>{title}</Text>
  )
}
const styles = StyleSheet.create({
    textStyle: {
        alignSelf:'center', 
        fontSize:moderateScale(20), 
        fontWeight:'600',
        color:'black', 
        marginVertical:verticalScale(10),
        textAlign:'center'
    }
})
