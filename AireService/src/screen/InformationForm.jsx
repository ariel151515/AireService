import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const InformationForm = () => {
  const navigation = useNavigation();

 React.useLayoutEffect(() => {
  navigation.setOptions({
    headerStyle: {
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

    tabBarVisible: true, // Oculta la barra de pestañas
  });
}, [navigation]);


  return (
    <View className="flex-1 bg-customAzulHome items-center justify-center">
      <View className="w-full bg-white flex-1 rounded-t-2xl items-center justify-center">
          <Text>Mis datos</Text>
      </View>
    </View>
  )
}

export default InformationForm

