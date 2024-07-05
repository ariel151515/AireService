import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image, Switch } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

// Imagenes
import not from './../../assets/not.png';
import banner from './../../assets/banner.png';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Home = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#086BEF',
      },
      headerTintColor: '#fff',
      headerShown: false,
    });
 }, []);


  return (
    <View className="flex-1 bg-customAzulHome">
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

     <View className="flex-row items-center justify-center pl-10 pr-10 pt-10 pb-5 mt-3">
        <View className="w-full flex-row items-center gap-3">
          <View className="bg-white rounded-full w-14 h-14 justify-center items-center text-2xl"><Text>AG</Text></View>
          <View><Text className="font-sans text-white font-bold text-xl">Hola Ariel</Text></View>
        </View>
        <View className="w-14 h-14 bg-customNotification rounded-2xl justify-center items-center">
           <MaterialIcons name="notifications" size={32} color="#fff"/>
           <View className="absolute">
            <View className="w-5 h-5 bg-red-700 rounded-full items-center justify-center relative mb-4 ml-4">
                <Text className="text-white">3</Text>
            </View>
           </View>
        </View>
     </View>

      <View className="flex-1 bg-white rounded-t-2xl  items-center pl-10 pr-10 justify-between">
           <View style={{width:320, height:250}} className="mt-10">
              <Image source={banner} className="w-full h-full" />
           </View>
           <View className="flex-row items-center w-full justify-between pr-5 pl-2">
              <Text className="text-xl font-sans font-bold">{isEnabled ? 'Estas conectado': 'No estas conectado'}</Text>
              <Switch
                  trackColor={{ false: "#767577", true: "#B2ED9E" }}
                  thumbColor={isEnabled ? "#f3f4f4" : "#f3f4f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.switch}
                />
           </View>
           <View style={{width:320, height:250}} className="mb-10">
              <Image source={banner} className="w-full h-full" />
           </View>
      </View>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }]
  }
})