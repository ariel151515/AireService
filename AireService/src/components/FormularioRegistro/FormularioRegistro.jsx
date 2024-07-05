import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

// Iconos
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const FormularioRegistro = () => {
  const navigation = useNavigation();

  // Redirige a la pantalla de inicio de sesión
  const handlePressCrearCuenta = () => {
    navigation.navigate('Login')
  };

  
  // Redirige a la pantalla de inicio de sesión
   const handlePressEntrar = () => {
      navigation.navigate('Tabs')
    };

  return (
    <View className="mt-5">
    <View className="">
       {/* Input de Usuario */}
       <View className="mt-5">
                <Text className="text-slate-500 font-sans text-xs">Nombre</Text>
                <View className="flex-row items-center  justify-between border-b border-slate-400 pt-2 pb-2">
                    <View className="flex-row items-center gap-3">
                      <AntDesign name="user" size={24} color="#64748b" />
                      <TextInput placeholder="Nombre" className="pt-2 pb-2 placeholder:text-base"/>
                    </View>
                    
                </View>
            </View>

            {/* Input de Email */}
            <View className="mt-5">
                <Text className="text-slate-500 font-sans text-xs">Email</Text>
                <View className="flex-row items-center  justify-between border-b border-slate-400 pt-2 pb-2">
                    <View className="flex-row items-center gap-3">
                      <AntDesign name="mail" size={24} color="#64748b" />
                      <TextInput placeholder="Email" className="pt-2 pb-2 placeholder:text-base"/>
                    </View>
                    
                </View>
            </View>

            {/* Input de Contraseña */}
            <View className="mt-5">
                <Text className="text-slate-500 font-sans text-xs">Contraseña</Text>
                <View className="flex-row items-center  justify-between border-b border-slate-400 pt-2 pb-2">
                    <View className="flex-row items-center gap-3">
                      <AntDesign name="lock1" size={24} color="#64748b" />
                      <TextInput placeholder="Contraseña" className="pt-2 pb-2 placeholder:text-base"/>
                    </View>
                    <View>
                      <Feather name="eye-off" size={24} color="#64748b" />
                    </View>
                </View>
            </View>

        
      {/* Contenedor botones y legales*/}
      <View className="flex-col flex-1 justify-end pb-20 pt-20">
          <TouchableOpacity className="bg-customAzul items-center pt-3 pb-3 rounded-full" onPress={handlePressEntrar}>
              <Text className="text-white font-sans text-base">Crear cuenta</Text>
          </TouchableOpacity>

          <View className="bg-white items-center pt-3 pb-3 rounded-full flex-row justify-center gap-1 mt-1">
            <Text className="text-slate-500 font-sans text-base">¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={handlePressCrearCuenta}>
                <Text className="text-slate-500 font-sans text-base">Entrar</Text>
            </TouchableOpacity>
          </View>

          <View className="flex">
            <Text className="font-sans text-xs text-slate-500 text-center">
            Al continuar, confirmo que he leido y aceptado los
            Terminos y condiciones y Politicas de privacidad
            </Text>
          </View>
      </View>

  </View>

  </View>
  )
}

export default FormularioRegistro;
