import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

// Imagenes
import logo from './../../assets/logo.png';

// Components
import FormularioRegistro from './../components/FormularioRegistro/FormularioRegistro';

const Registro = () => {
  return (
      <View className="flex-1 bg-white justify-center items-center pl-10 pr-10">
        <View className="justify-center items-center">
          <Image source={logo}/>
          <FormularioRegistro />
        </View>
      </View>  )
}

export default Registro;
