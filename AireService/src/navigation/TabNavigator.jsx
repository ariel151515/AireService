import React, { useState } from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// screen
import Login from '../screen/Login'
import Loading from './../screen/Loading';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  
// Usa useContext para acceder al contexto
const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#086BEF',
            tabBarInactiveTintColor: '#ccc',
            tabBarStyle: { 
            display: 'flex', 
            backgroundColor: '#fff',
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
           component={isAuthenticated ? MenuScreen : Login} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Feather 
                    name="menu" 
                    size={size} 
                    color={color}/>
            ),
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                    Home
                </Text>
            ),
          }}
       />

<Tab.Screen 
           name="Hab" 
           component={isAuthenticated ? MenuScreen : Login} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Feather 
                    name="menu" 
                    size={size} 
                    color={color}/>
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
           component={isAuthenticated ? MenuScreen : Login} 
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
          }}
       />


    </Tab.Navigator>

  )
}

export default TabNavigation