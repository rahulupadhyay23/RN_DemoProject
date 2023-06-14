import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CustomeHeader from '../components/CustomeHeader';
import { horizontalScale, verticalScale } from '../helpers/scale';
import HeaderText from '../components/HeaderText';
import CustomeTextInput from '../components/CustomeTextInput';
import CustomeButton from '../components/CustomeButton';

export default function ResetPasswordScreen2(props) {
  const {navigation} = props;
  return (

    <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:'#ffffff',paddingHorizontal: horizontalScale(15)}}>
        <CustomeHeader onPress={() => navigation.goBack()}/>
        <View style={{height: verticalScale(200), width: horizontalScale(200), alignSelf:'center', marginVertical: verticalScale(15)}}>
        <Image source={require('../images/img1.png')} style={{height:'100%', width:'100%', resizeMode:'cover'}} />
        </View>
        <HeaderText
            title= "Reset Password"
        />
        <View style={{height:verticalScale(20)}}/>
        <CustomeTextInput
        label="Password"
        placeholder="Enter Password"
        placeholderTextColor="grey"
        />
        <CustomeTextInput
        label="Confirm Password"
        placeholder="Enter Confirm Password"
        placeholderTextColor="grey"
        />
        <CustomeButton
            title="Reset"
            backgroundColor="#0B2A74"
            color="white"
            onPress= {() => navigation.navigate("PasswordChangedScreen")}
        />
         <View style={styles.flex}>
              <View style={styles.line} />
              <Text style={styles.OrText}>OR</Text>
              <View style={styles.line} />
            </View>

            <CustomeButton
            title="Login"
            color="black"
            backgroundColor="lightgrey"
        />
    </ScrollView>
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
