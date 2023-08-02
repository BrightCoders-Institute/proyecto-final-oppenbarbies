import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles'

type Props = {}

const HomeClientScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={HomeClientScreenStyles.body}>
      <View style={HomeClientScreenStyles.nameContainer}>
        <Text style={HomeClientScreenStyles.name}>Hello!</Text>
        <Text style={HomeClientScreenStyles.name}>George</Text>
      </View>
      <View style={HomeClientScreenStyles.detailsContainer}>
        <Text style={HomeClientScreenStyles.details}>Email: email@email.com</Text>
        <Text style={HomeClientScreenStyles.details}>Birth: 18 Jun, 1993</Text>
        <Text style={HomeClientScreenStyles.details}>Phone: XXX-XXX-XXXX</Text>
        <Text style={HomeClientScreenStyles.details}>Location: Villa de Alvarez</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeClientScreen;