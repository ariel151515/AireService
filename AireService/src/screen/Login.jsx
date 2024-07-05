import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

// Imagenes
import logo from './../../assets/logo.png';

// Components
import FormularioLogin from './../components/FormularioLogin/FormularioLogin';

const Login = () => {
  return (
      <View className="flex-1 bg-white justify-center items-center px-2.5">
        <View className="justify-center items-center mt-40">
          <Image source={logo}/>
          <FormularioLogin />
        </View>
      </View>  )
}

export default Login;
