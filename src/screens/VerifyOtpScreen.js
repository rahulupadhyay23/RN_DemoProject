import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import CustomeHeader from '../components/CustomeHeader';
import { horizontalScale, moderateScale, verticalScale } from '../helpers/scale';
import HeaderText from '../components/HeaderText';
import CustomeTextInput from '../components/CustomeTextInput';
import CustomeButton from '../components/CustomeButton';

export default function VerifyOtpScreen(props) {
  const {navigation} = props;
  return (
    <View style={{flex:1,backgroundColor:'#ffffff',paddingHorizontal: horizontalScale(15)}}>
        <CustomeHeader onPress={() => {navigation.goBack()}}/>
        <View style={{height: verticalScale(200), width: horizontalScale(200), alignSelf:'center', marginVertical: verticalScale(15)}}>
          <Image source={require('../images/img2.png')} style={{height:'100%', width:'100%', resizeMode:'cover'}} />
        </View>
        <HeaderText
            title= "Verify OTP"
        />
        <Text style={{textAlign:'center', color:'#000000', marginVertical:verticalScale(10)}}>{`Enter OTP sent to your registered\nMobile number`}</Text>
       
        <View style={styles.otpContainer}> 
                       
            <TextInput
                placeholder='1'
                maxLength={1}
                style={styles.otpTextInput}
            />
            <TextInput
                placeholder='2'
                maxLength={1}
                style={styles.otpTextInput}
            />
            <TextInput
                placeholder='3'
                maxLength={1}
                style={styles.otpTextInput}
            />
            <TextInput
                placeholder='4'
                maxLength={1}
                style={styles.otpTextInput}
            />
        </View>

        <View style={styles.flex}>
            <View style={{
                paddingVertical:verticalScale(5), 
                paddingHorizontal: horizontalScale(10), 
                borderWidth:1,
                borderRadius:moderateScale(5),
                borderColor:'lightgrey'
                }}>
                <Text>00.37</Text>
            </View>
            <Text style={{marginLeft:horizontalScale(13)}}>Resend</Text>
        </View>


        <View style={{height:verticalScale(20)}}/>
      
      

            <CustomeButton
            title="Verify"
            color="#ffffff"
            backgroundColor="#0B2A74"
            onPress={() => navigation.navigate("ResetPasswordScreen2")}
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
otpContainer:{
    display:'flex', 
    flexDirection:'row' ,
    width:'80%',
    alignSelf:'center',
    justifyContent:'space-between', 
    marginVertical:verticalScale(30)
},

  otpTextInput: {
    width:50,
    height:50,
    borderWidth:1,
    borderRadius:moderateScale(10),
    borderColor: '#0B2A74',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
}
})
