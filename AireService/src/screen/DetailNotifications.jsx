import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import not2 from './../../assets/not2.png';

const DetailNotifications = () => {
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
      headerTitle: 'Notificaciones', // Aquí especifica el nuevo título del encabezado
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
      <View className="w-full bg-white flex-1 rounded-t-2xl items-center justify-center">
        <View className="gap-5 items-center">
            <View>
              <Image source={not2} />
            </View>
            <View>
              <Text className="text-gray-300 font-sans text-base">No tienes notificaciones</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default DetailNotifications
