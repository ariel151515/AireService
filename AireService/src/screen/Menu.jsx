import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


// Imagenes
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Menu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#086BEF',
      },
      headerTintColor: '#fff',
      headerShown: false,
    });
 }, []);

  // Redirige a la pantalla de inicio de sesión
  const handlePressCerrarMenu = () => {
    navigation.goBack();
  };

  const handlePressLogin = () => {
    navigation.navigate('TermsAndConditions')
  }

  const handlePressMenu = (props) => {
    if(props === 'Home') return navigation.navigate('Home');
    if(props === 'Mis datos') return navigation.navigate('MisDatos');
    if(props === 'Habilidades') return navigation.navigate('Habilidades');
    if(props === 'Notificaciones') return navigation.navigate('DetailNotifications');
    if(props === 'Views') return navigation.navigate('Views');
    if(props === 'TermsAndConditions') return navigation.navigate('TermsAndConditions');
    if(props === 'PrivacyPolicy') return navigation.navigate('PrivacyPolicy');
  }

  return (
    <View className="flex-1 justify-center  bg-customAzulHome pl-5 pr-5">
      
          <View className="flex-row items-center justify-center pb-5 pl-5 pr-2" style={{marginTop:'18%'}}>
              <View className="w-full flex-row items-center gap-3">
                 <View className="bg-white rounded-full w-14 h-14 justify-center items-center text-2xl"><Text>AG</Text></View>
                 <View><Text className="font-sans text-white font-bold text-lg w-12">Hola Ariel!</Text>
                 </View>
                 </View>
                  <View className="w-14 h-14 rounded-2xl justify-center items-center">
                  <View className="absolute">
                    <Feather name="x" size={32} color="#fff" onPress={handlePressCerrarMenu}/>
                  </View>
              </View>
            </View>

              <View className="flex-1 bg-customAzulHome w-full">
                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('Home')}>
                        <View>
                        <Fontisto name="home" size={24} color="#fff" />
                        </View>
                        <View className="ml-4">
                          <Text className="text-white font-sans text-lg">Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('Mis datos')}>
                      <View>
                        <FontAwesome name="user" size={24} color="#fff" />
                      </View>
                      <View className="ml-4">
                        <Text className="text-white font-sans text-lg">Mis datos</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('Habilidades')}>
                      <View>
                        <AntDesign name="profile" size={24} color="#fff" />
                      </View>
                      <View className="ml-4">
                        <Text className="text-white font-sans text-lg">Habilidades</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('Notificaciones')}>
                      <View>
                        <Ionicons name="notifications" size={24} color="#fff" />
                      </View>
                      <View className="ml-4">
                        <Text className="text-white font-sans text-lg">Notificaciones</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('Views')}>
                      <View>
                        <MaterialIcons name="preview" size={24} color="#fff" />
                      </View>
                      <View className="ml-4">
                        <Text className="text-white font-sans text-lg">Views</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('TermsAndConditions')}>
                      <View>
                      <MaterialCommunityIcons name="file-document" size={24} color="#fff" />
                      </View>
                      <View className="ml-4">
                        <Text className="text-white font-sans text-lg">Terminos y condiciones</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={() => handlePressMenu('PrivacyPolicy')}>
                      <View>
                      <MaterialCommunityIcons name="file-document" size={24} color="#fff" />
                      </View>
                      <View className="ml-4">
                        <Text className="text-white font-sans text-lg">Politicas de privacidad</Text> 
                      </View>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity className="flex-row items-center w-full bg-customAzulHome pt-4 pb-4" onPress={handlePressLogin}>
                      <View>
                      <Entypo name="login" size={24} color="#fff" />
                      </View>
                      <View className="ml-4" >
                        <Text className="text-white font-sans text-lg" onPress={handlePressLogin}>Serrar sesión</Text>
                      </View>
                </TouchableOpacity>

    </View>
  )
}

export default Menu