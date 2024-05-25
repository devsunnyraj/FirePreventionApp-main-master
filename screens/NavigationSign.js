import React from 'react';

import EmployeeLogin from './EmployeeLogin'
import EmployeeSignup from './EmployeeSignup'
import PeopleLogin from './PeopleLogin'
import PeopleSignup from './PeopleSignup'
import SosLogin from './SosLogin'
import SosSignup from './SosSignup'
import UserType from './UserType'
import HomeNavigation from './HomeNavigation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function NavigationSign() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='UserType' screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="EmployeeLogin"
          component={EmployeeLogin}
        />
        <Stack.Screen
          name="EmployeeSignup"
          component={EmployeeSignup}
        />
              <Stack.Screen
          name="SosLogin"
          component={SosLogin}
        />
        <Stack.Screen
          name="SosSignup"
          component={SosSignup}
        />
              <Stack.Screen
          name="PeopleLogin"
          component={PeopleLogin}
        />
        <Stack.Screen
          name="PeopleSignup"
          component={PeopleSignup}
        />
        <Stack.Screen
          name="UserType"
          component={UserType}
        />
        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  