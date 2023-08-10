import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppoinmentCard from './AppoinmentCard'

const dataClient= [
    {
        id: "1",
        date: "Tue Ago 08,2023",
        time: "08:30",
        location: "Calle lagos #123, Colonia Montes",
        person: {
            name: "Caleriano Jhonson",
            age: 0,
            profession: "Licenciado"
        }
    }
] 

export default function AppoinmentList(): JSX.Element {
  return (
    <SafeAreaView>
      <FlatList
        data={dataClient}
        renderItem={({ item }) => <AppoinmentCard/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}