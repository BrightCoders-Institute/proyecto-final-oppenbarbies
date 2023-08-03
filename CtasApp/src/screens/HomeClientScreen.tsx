import React from 'react'
import {View, Text, SafeAreaView, Image} from 'react-native'
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles'
import Navbar from '../components/Navbar'

type Props = {}

const HomeClientScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={HomeClientScreenStyles.body}>
      <View style={HomeClientScreenStyles.photoContainer}>
        <Text style={HomeClientScreenStyles.gear}>x</Text>
        <Image style={HomeClientScreenStyles.photo} source={require('../assets/profilepick.png')}/>
      </View>
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
      <Navbar/>
    </SafeAreaView>
  )
}

export default HomeClientScreen;