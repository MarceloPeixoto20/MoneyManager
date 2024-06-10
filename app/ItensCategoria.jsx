import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { supabase } from '../utils/supabase';
import { Ionicons } from '@expo/vector-icons';

export default function ItensCategoria() {
    const {CategoriaId} = useLocalSearchParams();
    const [Categoria, setCategoria]= useState([])
    useEffect(()=>{
        console.log(CategoriaId)
        CategoriaId&&ListarItens();
    },[CategoriaId])

    const ListarItens = async()=>{
        const [data,error] = await supabase.from('Categoria').select("*")
        .eq('id',CategoriaId)
        setCategoria(data[0])
    }
  return (
    <View>
        <Ionicons name='arrow-back-cricle' size={44} color={'black'} />
        <View>
            <View>
                <Text style={styles.textIcon}></Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    textIcon:{
        fontSize:20
    }
})