import React,  { useState } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screen 
import Login from './../screen/Login';
import Registro from './../screen/Registro';
import Loading from './../screen/Loading';
import Menu from './../screen/Menu';
import DetailNotifications from './../screen/DetailNotifications';
import MisDatos from './../screen/InformationForm';
import Views from './../screen/Views';
import TermsAndConditions from './../screen/TermsAndConditions';
import PrivacyPolicy from './../screen/PrivacyPolicy';


import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {

  // Usa useContext para acceder al contexto
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Tabs' : 'Loading'}>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="DetailNotifications" component={DetailNotifications} options={{ headerShown: true }} />
        <Stack.Screen name="MisDatos" component={MisDatos} options={{ headerShown: true }} />
        <Stack.Screen name="Views" component={Views} options={{ headerShown: true }} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{ headerShown: true }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator