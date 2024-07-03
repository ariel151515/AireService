import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'

// Imagenes
import logo from './../../assets/logo.png';

const Loading = () => {

  const handlePress = () => {
    // Aquí defines la función que quieres ejecutar
    console.log('Imagen tocada');
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