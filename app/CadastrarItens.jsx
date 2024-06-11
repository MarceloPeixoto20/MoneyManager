import { View, Text,StyleSheet, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase';

export default function CadastrarItens() {
    const router = useRouter()
    const [CategoriaNome, setCategoriaNome]=useState('');
    const [Descricao, setDescricao]=useState('');
    const [icon, setIcon]=useState('');
    const [Custo, setCusto]=useState('');
    const {CategoriaId} = useLocalSearchParams();

    const Cadastrar=async()=>{        
        const { data, error } = await supabase
        .from('Categoria')
        .insert([{
          Nome:CategoriaNome,
          Descricao:Descricao ,
          icon:icon,
          categoria_id:CategoriaId,
          Custo:Custo
        }])
        .select()
        console.log(data);        
        if(data){
            ToastAndroid.show('Item Criada',ToastAndroid.SHORT)
            router.replace({pathname:'/ItensCategoria', params:{CategoriaId:CategoriaId}})
        }
        
    }  

  return (
    <View style={{
        marginTop:20,
        padding:20
    }}>
      
    <View style={{
        justifyContent:'center',
        alignItems:'center'
    }}>
        
        <View style={{
        justifyContent:'center',
        alignItems:'center'
        }}>

          <TextInput style={[styles.iconInput,{backgroundColor:'#61E01D'}]} maxLength={2} onChangeText={(v)=>setIcon(v)}></TextInput>
        </View>
        <View style={styles.inputview}>
              <Text>Categoria:</Text>
              <TextInput placeholder='Nome da Categoria' style={{width:'100%', fontSize:16}} onChangeText={(v)=>setCategoriaNome(v)}></TextInput>
        </View>
        <Text></Text>
        <View style={styles.inputview}>
            <Text>Descrição: </Text>
          <TextInput placeholder='Descrição' style={{width:'100%', fontSize:16}} onChangeText={(v)=>setDescricao(v)} ></TextInput>
        </View>
        <Text></Text>
        <View style={styles.inputview}>
            <Text>Custo: </Text>
          <TextInput placeholder='Custo' style={{width:'100%', fontSize:16}} onChangeText={(v)=>setCusto(v)} keyboardType="numeric"></TextInput>
        </View>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={()=>Cadastrar()}>
            <Text style={{textAlign:'center', fontSize:16}}>Cadastrar</Text>
        </TouchableOpacity>   
         
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    inputview: {
        borderWidth:1,
        display:'flex',
        flexDirection:'row',
        gap:2,
        padding:14,
        borderRadius:10,
        borderColor:'#D4D4D4',
        backgroundColor:'#fff',
        alignItems:'center',
        marginTop:24

    },
    button: {
      alignItems: 'center',
      backgroundColor: '#27FF23',
      padding: 10,
      width: 500
    },
    iconInput:{
      textAlign:'center',
      fontSize:30,
      padding:20,
      borderRadius:99,
      paddingHorizontal:28,

    }
})