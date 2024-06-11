import {View, Text} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Homelayout(){
  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='(tabs)' screenOptions={{headerShown:false}} />
      <Stack.Screen name='CadastrarCategoria' options={{
        presentation:'modal',
        headerShown:true,
        headerTitle:'Cadastrar Categoria'
      }} />
      <Stack.Screen name='CadastrarItens' options={{
        presentation:'modal',
        headerShown:true,
        headerTitle:'Cadastrar Itens Categoria'
      }} />
    </Stack>
  )
}