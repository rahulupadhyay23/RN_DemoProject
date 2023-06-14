
import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeContex, ThemeProvider } from './src/theme/ThemeContext';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import ResetPasswordScreen2 from './src/screens/ResetPasswordScreen2';
import PasswordChangedScreen from './src/screens/PasswordChangedScreen';
import LoginScreen from './src/screens/LoginScreen';
import VerifyOtpScreen from './src/screens/VerifyOtpScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}  />
          <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />
          <Stack.Screen name="ResetPasswordScreen2" component={ResetPasswordScreen2}/>
          <Stack.Screen name="PasswordChangedScreen" component={PasswordChangedScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
    </ThemeProvider>    
        );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
