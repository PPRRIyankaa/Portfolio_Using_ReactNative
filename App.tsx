import { View, Text } from 'react-native'
import React from 'react'
import Index from './Screen'
import { Provider } from 'react-redux'
import store from './store'
import Modal1 from './Components/Modal'
export default function App() {
  return (
    <Provider store={store}>
    <Index/>
    </Provider>
  )
}