import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {ThemeContex} from '../theme/ThemeContext';
import {horizontalScale, verticalScale, moderateScale} from '../helpers/scale';
import HeaderText from '../components/HeaderText';
import CustomeTextInput from '../components/CustomeTextInput';
import CustomeButton from '../components/CustomeButton';
import {isPlatformiOS} from '../helpers/platform';

export default function LoginScreen(props) {
  const {navigation} = props;
  const {theme, toggleTheme} = useContext(ThemeContex);
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'#ffffff'}} behavior={isPlatformiOS() ? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingHorizontal:horizontalScale(15)}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginVertical: verticalScale(60),
              }}>
              <Image source={require('../images/logo.jpg')} style={styles.logoImg} />
              {/* <Text>Logo</Text> */}
            </View>
            <HeaderText title="Login to Continue" />
            <View style={{height:verticalScale(20)}}/>
            <CustomeTextInput
              label="Mobile Number"
              placeholder="Enter Mobile Number"
            />
            <CustomeTextInput
              label="Password"
              placeholder="Enter Password"
              icon="eye-off"
            />
            
            <TouchableOpacity style={{alignSelf:'flex-end'}}  onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Text style={styles.forgetText}>Forget Password?</Text>
            </TouchableOpacity>
            <CustomeButton 
              title="Login" 
              backgroundColor="#0B2A74" 
              color="#ffffff"
              onPress={() => {}}
            />
            <View style={styles.flex}>
              <View style={styles.line} />
              <Text style={styles.OrText}>OR</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.flex}>
              <Text style={styles.accountText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    height: verticalScale(80),
    width: horizontalScale(70),
    borderRadius: 40,
    backgroundColor: 'lightgrey',
  },

  forgetText: {
    alignSelf: 'flex-end',
    color: 'red',
    marginBottom: verticalScale(10),
  },

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

  accountText: {
    fontSize: moderateScale(14),
  },

  signupText: {
    fontSize: moderateScale(14),
    color: 'red',
    fontWeight: '500',
    marginVertical: verticalScale(20),
  },
});
