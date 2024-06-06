import {View, Text} from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import TelaLogin from './login'
import Index from './index'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile'
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
export default function TabsLayout(){   

    const Stack = createStackNavigator();
    const navigation = useNavigation();  
    const Tab = createBottomTabNavigator();         
    const auth = getAuth();
    const [logado, setLogado] = useState(true)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {        
            if (user) {                                  
                setLogado(true)
            } else {                                       
                setLogado(false)                     
            }
        })       
        
      }, [])      
    
          
  return( 
    <Tab.Navigator>
    {logado ? (       
        <>   
            <Tab.Screen name="Home" component={Index} screenOptions={{headerShown:false}} />
            <Tab.Screen name="Profile" component={Profile} screenOptions={{headerShown:false}} />        
        </>
      ) : (
        <>
          <Tab.Screen name="Login" component={TelaLogin} screenOptions={{headerShown:false}} />          
        </>
      )}  
    </Tab.Navigator>
  )
}