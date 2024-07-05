import React, { useState } from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// screen
import Login from '../screen/Login'
import Loading from './../screen/Loading';
import Home from './../screen/Home';
import Menu from './../screen/Menu';
import Skills from './../screen/Skills';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  
// Usa useContext para acceder al contexto
const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#88A2CE',
            tabBarStyle: { 
            display: 'flex', 
            backgroundColor: '#082860',
            height: '8%',
            paddingTop: 9,
            paddingBottom: 9,
            borderTopLeftRadius:0,
            borderTopRightRadius:0,
            },
        }}
    >

      <Tab.Screen 
           name="Home" 
           component={isAuthenticated ? Home : Login} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                    <AntDesign 
                        name="home" 
                        size={size} 
                        color={color}
                    />
            ),
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                    Home
                </Text>
            ),
          }}
       />

    <Tab.Screen 
           name="Habilidades" 
           component={isAuthenticated ? Skills : Login} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <AntDesign 
                   name="profile" 
                   size={size}
                   color={color} />
            ),
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                    Habilidades
                </Text>
            ),
          }}
       />

    <Tab.Screen 
           name="Menu" 
           component={isAuthenticated ? Menu : Login} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Feather 
                    name="menu" 
                    size={size} 
                    color={color}/>
            ),
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                    Menu
                </Text>
            ),
            tabBarStyle: ({
                display:'none',
              }),
          }}
       />

    </Tab.Navigator>

  )
}

export default TabNavigation