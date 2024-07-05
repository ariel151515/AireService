import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch, ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TermsAndConditions = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 100, // Ajusta esta línea para establecer la altura del encabezado
        backgroundColor: '#ffff',
        levation: 0, // Elimina la sombra en Android
        shadowOpacity: 0, // Elimina la sombra en iOS
        borderBottomWidth: 0, // Elimina el borde inferior
      },
      headerTitle: 'Terminos y condiciones', // Aquí especifica el nuevo título del encabezado
      headerTintColor: '#082860',
      headerLeft: () => (
        <TouchableOpacity
          className="text-white font-sans pl-3"
          onPress={() => { navigation.goBack(); }}
        >
          <MaterialIcons name="arrow-back" size={24} color="#082860" />
        </TouchableOpacity>
      ),
      tabBarVisible: true, // Oculta la barra de pestañas
    });
  }, [navigation]);
  return (
    <ScrollView className="flex-1 bg-white pl-5 pr-5">
    <View className="mt-3">
        <Text className="text-lg font-sans text-blue-400 pb-2">Demostraciones de tipografías</Text>
          <Text className="text-sm font-sans text-gray-500">
          Demostraciones de tipografías:Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
          </Text>
    </View>

    <View className="mt-3">
        <Text className="text-lg font-sans text-blue-400 pb-2">Demostraciones de tipografías</Text>
          <Text className="text-sm font-sans text-gray-500">
          Demostraciones de tipografías:Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
          </Text>
    </View>

    <View className="mt-3">
        <Text className="text-lg font-sans text-blue-400 pb-2">Demostraciones de tipografías</Text>
          <Text className="text-sm font-sans text-gray-500">
          Demostraciones de tipografías:Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
          </Text>
    </View>

    <View className="mt-3">
        <Text className="text-lg font-sans text-blue-400 pb-2">Demostraciones de tipografías</Text>
          <Text className="text-sm font-sans text-gray-500">
          Demostraciones de tipografías:Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
          </Text>
    </View>

    <View className="mt-3 pb-10">
        <Text className="text-lg font-sans text-blue-400">Demostraciones de tipografías</Text>
          <Text className="text-sm font-sans text-gray-500">
          Demostraciones de tipografías:Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.
          </Text>
    </View>

    <View className="pb-10"></View>
    </ScrollView>
  )
}

export default TermsAndConditions