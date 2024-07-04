import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React from 'react'

// Imagenes
import logo from './../../assets/logo.png';

// Components
import FormularioLogin from './../components/FormularioLogin/FormularioLogin';

const Login = () => {
  return (
      <View>
        <Image source={logo}/>
        <FormularioLogin />
      </View>  )
}

export default Login;

const styles = StyleSheet.create({
  contenedor:{
    display: 'flex',
  }
})