import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomeHeader from '../components/CustomeHeader';
import { horizontalScale, verticalScale } from '../helpers/scale';
import HeaderText from '../components/HeaderText';
import CustomeTextInput from '../components/CustomeTextInput';
import CustomeButton from '../components/CustomeButton';

export default function PasswordChangedScreen(props) {
  const {navigation} = props;
  return (
    <View style={{flex:1,backgroundColor:'#ffffff',paddingHorizontal: horizontalScale(15)}}>
        <View style={{height:verticalScale(60)}}/>
        <View style={{height: verticalScale(200), width: horizontalScale(200), alignSelf:'center', marginVertical: verticalScale(15)}}>
          <Image source={require('../images/img2.png')} style={{height:'100%', width:'100%', resizeMode:'cover'}} />
        </View>
        <HeaderText
            title= {`Password Changed \n Successfully`}
        />
        <View style={{height:verticalScale(20)}}/>
        <CustomeButton
            title="Back to Login"
            backgroundColor="#0B2A74"
            color="white"
            onPress={() => navigation.navigate('LoginScreen')}
        />
    </View>
  )
  
}

const styles = StyleSheet.create({
    
  flex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    height: 1,
    flex: 1,
    backgroundColor: 'lightgrey',
    opacity: 0.5,
  },

  OrText: {
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(10),
    fontWeight: '500',
  },
})
