import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

// Imagenes
import logo from './../../assets/logo.png';

const Loading = () => {
  const navigation = useNavigation();

  // Redirige a la pantalla de inicio de sesión
  const handlePress = () => {
    navigation.navigate('Login')
  };

  return (
    <View className="flex-1 justify-center">
        <View className="items-center gap-20">
          <TouchableOpacity onPress={handlePress}>
            <Image source={logo}/>
          </TouchableOpacity>
            <ActivityIndicator size="large" color="#07C7FB" />
        </View>
      </View>
  )
}

export default Loading