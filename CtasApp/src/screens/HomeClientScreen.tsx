import React from 'react'
import {View, Text, SafeAreaView, Image} from 'react-native'
import HomeClientScreenStyles from '../styles/HomeClientScreenStyles'
import Navbar from '../components/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

type Props = {}

const HomeClientScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={HomeClientScreenStyles.body}>
      <View style={HomeClientScreenStyles.photoContainer}>
        <FontAwesome style={HomeClientScreenStyles.gear} name="gear" size={25}/>
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