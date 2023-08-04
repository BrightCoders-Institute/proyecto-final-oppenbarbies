import React from "react";
import { View, Text, SafeAreaView} from "react-native";
import HomeClientScreenStyles from "../styles/HomeClientScreenStyles";

type Props = {
  name: string;
  email: string;
  birth: string;
  phone: string;
  location: string;
}

const UserDetailsClient: React.FC<Props> = ({name,email, birth, phone, location}) => {
  return (
    <SafeAreaView>
      <View style={HomeClientScreenStyles.detailsContainer}>
        <View style={HomeClientScreenStyles.nameContainer}>
          <Text style={HomeClientScreenStyles.name}>Hello!</Text>
          <Text style={HomeClientScreenStyles.name}>{name}</Text>
        </View>
        <Text style={HomeClientScreenStyles.details}>Email: {email}</Text>
        <Text style={HomeClientScreenStyles.details}>Birth: {birth}</Text>
        <Text style={HomeClientScreenStyles.details}>Phone: {phone}</Text>
        <Text style={HomeClientScreenStyles.details}>Location: {location}</Text>
      </View>
    </SafeAreaView>
  )
}

export default UserDetailsClient;