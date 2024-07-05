import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const InformationForm = () => {
  const navigation = useNavigation();

 React.useLayoutEffect(() => {
  navigation.setOptions({
    headerStyle: {
      height: 100, // Ajusta esta línea para establecer la altura del encabezado
      backgroundColor: '#112F64',
      levation: 0, // Elimina la sombra en Android
      shadowOpacity: 0, // Elimina la sombra en iOS
      borderBottomWidth: 0, // Elimina el borde inferior
    },
    headerTitle: 'Mis datos', // Aquí especifica el nuevo título del encabezado
    headerTintColor: '#fff',
    headerLeft: () => (
      <TouchableOpacity
        className="text-white font-sans pl-3"
        onPress={() => { navigation.goBack(); }}
      >
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        className=""
        onPress={null} // Utiliza navigation.navigate para navegar a la pantalla "Nutrition"
      >
        <View className="w-14 h-14 rounded-2xl justify-center items-center">
           <MaterialIcons name="notifications" size={32} color="#fff"/>
           <View className="absolute">
            <View className="w-5 h-5 bg-red-700 rounded-full items-center justify-center relative mb-4 ml-4">
                <Text className="text-white">3</Text>
            </View>
           </View>
        </View>
      </TouchableOpacity>
    ),

    tabBarVisible: true, // Oculta la barra de pestañas
  });
}, [navigation]);


  return (
    <View className="flex-1 bg-customAzulHome items-center justify-center">
      <View className="w-full bg-white flex-1 rounded-t-2xl  justify-between pl-5 pr-5 pt-10">
        <View>
           <Text className="font-sans text-xl font-bold">Puedes contactarnos para modificar tus datos si así lo deseas.</Text>
        </View>

        <View className="flex-1">
            <View className="w-full pt-5">

            <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                    <FontAwesome name="user" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                  <Text className="font-sans text-base">Nombre y apellido</Text>
                  <Text className="font-sans text-xl font-bold text-customAzul">Ariel Gentile</Text>
                </View>
              </View>


              <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                    <FontAwesome name="phone" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                <Text className="font-sans text-base">Teléfono</Text>
                <Text className="font-sans text-xl font-bold text-customAzul">+45 1534233445</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                    <MaterialIcons name="email" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                <Text className="font-sans text-base">Email</Text>
                <Text className="font-sans text-xl font-bold text-customAzul">arielgentile89gmail.com</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                  <Fontisto name="world" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                <Text className="font-sans text-base">Pais</Text>
                <Text className="font-sans text-xl font-bold text-customAzul">Argentina</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                    <Entypo name="location-pin" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                <Text className="font-sans text-base">Ciudad</Text>
                <Text className="font-sans text-xl font-bold text-customAzul">Buenos Aires</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                    <MaterialIcons name="add-business" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                <Text className="font-sans text-base">Dirección Comercial</Text>
                <Text className="font-sans text-xl font-bold text-customAzul">Av Peron 3445</Text>
                </View>
              </View>

              <View className="flex-row items-center mt-4">
                <View className="bg-customAzulClarito rounded-md items-center justify-center" style={{width:48, height:48}}>
                    <FontAwesome5 name="id-card" size={24} color="#112F64" />
                </View>
                <View className="ml-4">
                <Text className="font-sans text-base">RUT/DNI</Text>
                <Text className="font-sans text-xl font-bold text-customAzul">3423342334</Text>
                </View>
              </View>

            </View>
        </View>

      </View>
    </View>
  )
}

export default InformationForm

