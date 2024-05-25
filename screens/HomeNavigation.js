import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Training from './Training'
import Cameras from './Cameras'

import { NavigationContainer } from "@react-navigation/native"

import { Colors } from '../components/style'

const Tab = createBottomTabNavigator()

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const {brand, primary,darkLight} = Colors

export default function HomeNavigation (){
    return(
        <Tab.Navigator
            screenOptions={{
            tabBarActiveTintColor : brand,
            headerShown:false,
            }}
        >
        <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
            tabBarIcon:({focused})=>(
            <FontAwesome5
                name={'home'}
                size={25}
                color ={focused ? brand : "black"}
            />
            )
        }}
        />
        <Tab.Screen 
            name='Cameras' 
            component={Cameras}
            options={{
            tabBarIcon:({focused})=>(
                <MaterialCommunityIcons
                name={'cctv'}
                size={25}
                color ={focused ? brand : "black"}
                />
            )
            }}            
        />
        <Tab.Screen 
            name='Training' 
            component={Training}
            options={{
            tabBarIcon:({focused})=>(
                <FontAwesome5
                name={'chalkboard-teacher'}
                size={25}
                color ={focused ? brand : "black"}
                />
            )
            }}            
        />
    </Tab.Navigator>
    )
}

