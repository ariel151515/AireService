import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React from 'react'

// Iconos
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const FormularioLogin = () => {
  return (
    <View style={styles.contenedor}>
       <Text>Email</Text>
       <AntDesign name="mail" size={24} color="#CBD5E1" />
       <TextInput placeholder="Email"/>
       <Text>Contraseña</Text>  
       <AntDesign name="lock1" size={24} color="#CBD5E1" />
       <TextInput placeholder="Contraseña"/> 
       <Feather name="eye-off" size={24} color="#CBD5E1" />
       <Text>Enviar</Text>
       <Text>¿No tienes cuenta? Crear cuenta</Text>
  </View>
  )
}

export default FormularioLogin;

const styles = StyleSheet.create({
  contenedor:{
    display: 'flex',
  }
})