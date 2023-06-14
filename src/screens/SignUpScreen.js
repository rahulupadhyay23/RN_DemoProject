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

export default function SignUpScreen(props) {
  const {navigation} = props;
  const {theme, toggleTheme} = useContext(ThemeContex);
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'#ffffff'}} behavior={isPlatformiOS() ? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingHorizontal:horizontalScale(15)}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginVertical: verticalScale(20),
              }}>
              <Image source={require('../images/logo.jpg')} style={styles.logoImg} />
            </View>
            <HeaderText title="Create Account" />
            <View style={{height:verticalScale(20)}}/>
            <CustomeTextInput
              label="Full Name"
              placeholder="Enter Full Name"
            />
            <CustomeTextInput
              label="Mobile Number"
              placeholder="Enter Mobile Number"
            />
            <CustomeTextInput
              label="Email Id"
              placeholder="Enter Email Id"
            />
            <CustomeTextInput
              label="Password"
              placeholder="Enter Password"
              icon="eye-off"
            />
            <CustomeTextInput
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              icon="eye-off"
            />
            <CustomeButton 
              title="Register" 
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
              <Text style={styles.accountText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.signupText}>Login</Text>
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
