import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch, Dimensions, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


const Skills = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
    headerTitle: 'Habilidades', // Aquí especifica el nuevo título del encabezado
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

// muestra la ventana modal
const muestraModal = () => {
  setModalVisible(true);
};

const ocultaModal = () => {
  setModalVisible(false);
};

  return (
    <View className="flex-1 bg-customAzulHome">
      <View className="w-full bg-white flex-1 rounded-t-2xl pl-5 pr-5 pt-5">
          <View className="w-full items-center">
                <View>
                  <Text className="font-sans text-2xl font-bold">Agregar nuevas habilidades</Text>
                </View>
             <View className="w-full mt-5">
              <TouchableOpacity onPress={muestraModal}>
                <View className="bg-customAzulHome items-center rounded-full pt-2 pb-2 flex-row justify-center">
                  <View className="gap-2 flex-row">
                      <FontAwesome6 name="plus" size={24} color="#fff" />
                      <Text className="font-sans text-base font-semibold text-white">Agregar</Text>
                  </View>
                </View>
              </TouchableOpacity>
             </View>
          </View>

         <View className="flex-1 gap-2 mt-5">
            <View className="w-full border rounded-full p-2">
                <View className="flex-row items-center justify-between">
                    <View className="">
                          <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                      </View>
                      <View className="rounded-full bg-green-600 pl-3 pr-3 pt-1 pb-1">
                          <View className="flex-row items-center gap-2">
                            <Foundation name="like" size={24} color="#fff" />
                            <Text className="text-sm font-sans text-white">Aprobado</Text>
                          </View>
                      </View>
                  </View>
              </View>

              <View className="w-full border rounded-full p-2">
                  <View className="flex-row items-center justify-between">
                      <View className="">
                            <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                        </View>
                        <View className="rounded-full bg-green-600 pl-3 pr-3 pt-1 pb-1">
                            <View className="flex-row items-center gap-2">
                              <Foundation name="like" size={24} color="#fff" />
                              <Text className="text-sm font-sans text-white">Aprobado</Text>
                            </View>
                        </View>
                  </View>
               </View>

               <View className="w-full border rounded-full p-2">
                  <View className="flex-row items-center justify-between">
                      <View className="">
                            <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                        </View>
                        <View className="rounded-full bg-red-600 pl-3 pr-3 pt-1 pb-1">
                            <View className="flex-row items-center gap-2">
                              <Foundation name="dislike" size={24} color="#fff" />
                              <Text className="text-sm font-sans text-white">Declinado</Text>
                            </View>
                        </View>
                  </View>
               </View>

               <View className="w-full border rounded-full p-2">
                  <View className="flex-row items-center justify-between">
                      <View className="">
                            <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                        </View>
                        <View className="rounded-full bg-green-600 pl-3 pr-3 pt-1 pb-1">
                            <View className="flex-row items-center gap-2">
                              <Foundation name="like" size={24} color="#fff" />
                              <Text className="text-sm font-sans text-white">Aprobado</Text>
                            </View>
                        </View>
                  </View>
               </View>

               <View className="w-full border rounded-full p-2">
                  <View className="flex-row items-center justify-between">
                      <View className="">
                            <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                        </View>
                        <View className="rounded-full bg-green-600 pl-3 pr-3 pt-1 pb-1">
                            <View className="flex-row items-center gap-2">
                              <Foundation name="like" size={24} color="#fff" />
                              <Text className="text-sm font-sans text-white">Aprobado</Text>
                            </View>
                        </View>
                  </View>
               </View>

               <View className="w-full border rounded-full p-2">
                  <View className="flex-row items-center justify-between">
                      <View className="">
                            <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                        </View>
                        <View className="rounded-full bg-sky-600 pl-3 pr-3 pt-1 pb-1">
                            <View className="flex-row items-center gap-2">
                              <MaterialIcons name="pending" size={24} color="#fff" />
                              <Text className="text-sm font-sans text-white">Pendiente</Text>
                            </View>
                        </View>
                  </View>
               </View>

               <View className="w-full border rounded-full p-2">
                  <View className="flex-row items-center justify-between">
                      <View className="">
                            <Text className="text-sm font-sans">Técnico en aire acondicionado</Text>
                        </View>
                        <View className="rounded-full bg-green-600 pl-3 pr-3 pt-1 pb-1">
                            <View className="flex-row items-center gap-2">
                              <Foundation name="like" size={24} color="#fff" />
                              <Text className="text-sm font-sans text-white">Aprobado</Text>
                            </View>
                        </View>
                  </View>
               </View>

         </View>

      </View>
      



      {/* -------------------------------------------------------------------- */}
      <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                        >
                <View style={styles.overlay}>
                    <View style={styles.modalView}>
                        <View className="p-5 w-full">
                          <Text className="font-sans text-2xl font-bold text-center">Puedes agregar todas las habilidades que desees</Text>

                           <View className="flex-col mt-5 mb-5">
                              <View className="">
                                  <View className="gap-2 flex-row items-center mt-2">
                                      <View><AntDesign name="checksquare" size={24} color="#112F64" /></View>
                                      <View className=""><Text className="font-sans text-base">Técnico en aire acondicionado</Text></View>
                                  </View>
                                </View>

                                <View className="">
                                  <View className="gap-2 flex-row items-center mt-2">
                                      <View><AntDesign name="checksquare" size={24} color="#112F64" /></View>
                                      <View className=""><Text className="font-sans text-base">Técnico en aire acondicionado</Text></View>
                                  </View>
                                </View>

                                <View className="">
                                  <View className="gap-2 flex-row items-center mt-2">
                                      <View><AntDesign name="checksquare" size={24} color="#112F64" /></View>
                                      <View className=""><Text className="font-sans text-base">Técnico en aire acondicionado</Text></View>
                                  </View>
                                </View>

                                <View className="">
                                  <View className="gap-2 flex-row items-center mt-2">
                                      <View><AntDesign name="checksquare" size={24} color="#112F64" /></View>
                                      <View className=""><Text className="font-sans text-base">Técnico en aire acondicionado</Text></View>
                                  </View>
                                </View>

                                <View className="">
                                  <View className="gap-2 flex-row items-center mt-2">
                                      <View><AntDesign name="checksquare" size={24} color="#112F64" /></View>
                                      <View className=""><Text className="font-sans text-base">Técnico en aire acondicionado</Text></View>
                                  </View>
                                </View>

                                <View className="">
                                  <View className="gap-2 flex-row items-center mt-2">
                                      <View><AntDesign name="checksquare" size={24} color="#112F64" /></View>
                                      <View className=""><Text className="font-sans text-base">Técnico en aire acondicionado</Text></View>
                                  </View>
                                </View>

                                <View className="w-full mt-10">
                                    <TouchableOpacity onPress={muestraModal} className="bg-customAzulHome items-center justify-center rounded-full pt-3 pb-3">
                                        <Text className="text-white font-sans text-base font-semibold">Agregar habilidad</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={ocultaModal} className="bg-white items-center justify-center rounded-full pt-3 pb-3 mt-1">
                                        <Text className="text-customAzulHome font-sans text-base font-semibold">Cancelar</Text>
                                    </TouchableOpacity>
                                </View>

                           </View>
                        </View>
                    </View>
                </View>
             </Modal>
        {/* -------------------------------------------------------------------- */}

        

    </View>
  )
}

export default Skills;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const modalWidth = windowWidth * 0.95; // Calcula el 90% del ancho de la pantalla

const styles = StyleSheet.create({
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // fondo negro semitransparente
        justifyContent: 'center',
        alignItems: 'center',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      
      },
      modalView: {
        width: modalWidth, // Aplica el ancho calculado
        margin: 20,
        backgroundColor: 'white',
        borderRadius:5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewD: {
        width: modalWidth, // Aplica el ancho calculado
        margin: 20,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparente con 50% de opacidad
        borderRadius:5,
        padding:30,
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 0,
    },
});
