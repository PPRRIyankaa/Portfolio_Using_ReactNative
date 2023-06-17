 import { View, Text } from 'react-native'
 import React from 'react'
 import Bottomscreen from './bottomscreen'
 import { NavigationContainer } from '@react-navigation/native'
 
 export default function index() {
   return (
    <NavigationContainer>
        <Bottomscreen/>
      </NavigationContainer>
   )
 }