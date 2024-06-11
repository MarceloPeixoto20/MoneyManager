import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router, useLocalSearchParams, useRouter } from 'expo-router'
import { supabase } from '../utils/supabase';
import { Ionicons } from '@expo/vector-icons';
import Itens from '../components/Itens';
import Listaritens from '../components/Listaitens';
import { FontAwesome6 } from '@expo/vector-icons';

export default function ItensCategoria() {
    const {CategoriaId} = useLocalSearchParams();
    const [Categoria, setCategoria]= useState([])
    const router = useRouter()
    useEffect(()=>{
        console.log(CategoriaId)
        CategoriaId&&ListarItens();
    },[CategoriaId])

    const ListarItens = async()=>{
        const {data,error} = await supabase.from('Categoria').select('*,Categoria_itens(*)')
        .eq('id',CategoriaId)
        setCategoria(data[0])
        console.log(data)
    }
  return (
    <View style={{marginTop:20}}>
        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name='arrow-back-outline' size={44} color={'black'} />
        </TouchableOpacity>
        <Itens CategoriaItens={Categoria}/>
        <Listaritens Itenscategoria={Categoria}/>

        <Link href={({
            pathname:'/CadastrarItens',
            params:{
                CategoriaId:Categoria.id
            }
        })} style={styles.floating}>
            <FontAwesome6 name="add" size={40} color="black" />
        </Link>
    </View>
  )
}


const styles = StyleSheet.create({    
    floating:{
        position:'absolute',
        bottom:240,
        right:20
        
    }
})