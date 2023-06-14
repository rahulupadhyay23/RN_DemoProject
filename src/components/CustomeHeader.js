import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../helpers/scale';
import Icon from 'react-native-vector-icons/Feather';

export default function CustomeHeader({onPress}) {
  return (
   <TouchableOpacity onPress={onPress} style={styles.header}>
        <Icon name="chevron-left" size={moderateScale(22)} color="grey" />
        <Text style={styles.headerText}>Back</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    header: {
        height:verticalScale(70),
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    headerText: {
        fontSize: moderateScale(14),
        marginLeft: horizontalScale(3)
    }
})
