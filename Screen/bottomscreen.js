import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab =  createBottomTabNavigator ();
export default function bottomscreen() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
         <Tab.Screen name="About" component={About}></Tab.Screen>
       </Tab.Navigator>
  )
}