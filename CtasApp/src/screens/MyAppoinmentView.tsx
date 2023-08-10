import { View, Text } from 'react-native'
import React from 'react'
import AppoinmentList from '../components/AppoinmentList'

export default function MyAppoinmentView(): JSX.Element {
  return (
    <View>
      <Text>MyAppoinmentView</Text>
      <AppoinmentList/>
    </View>
  )
}