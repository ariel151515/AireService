import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

// Imagenes
import logo from './../../assets/logo.png';

// Components
import FormularioLogin from './../components/FormularioLogin/FormularioLogin';

const Login = () => {
  return (
      <View className="flex-1 bg-white justify-center items-center pl-10 pr-10">
        <View className="justify-center items-center">
          <Image source={logo}/>
          <FormularioLogin />
        </View>
      </View>  )
}

export default Login;
