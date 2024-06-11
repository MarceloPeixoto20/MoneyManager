import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

export default function ListarCategoria({categorialista}) {
    const router = useRouter()
    const Categoriaclick=(categoria)=>{
        router.push({
            pathname:'/ItensCategoria',
            params:{
                CategoriaId:categoria.id
            }
        })
    }
    
  return (
        <View>
        <View style={{marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>Lista das Categoria: </Text>
        </View>
        <View>
            {categorialista?.map((categoria,index)=>(
                <TouchableOpacity key={index} style={Styles.container} onPress={()=>Categoriaclick(categoria)}>
                    <View style={Styles.iconContainer}>
                        <Text style={[Styles.iconText,{backgroundColor:"red"}]}>{categoria.icon}</Text>
                    </View>
                    <View style={Styles.subContainer}>
                        <View>
                            <Text style={Styles.CategoriaText}>{categoria.Nome}</Text>
                            <Text style={Styles.Contador}>Itens: {categoria?.Categoria_itens?.length}</Text>
                        </View>
                        <View>
                            <Text>Total</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}     
                
        </View>
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        marginBottom:10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    iconContainer:{
        justifyContent:'center',
        alignItems:'baseline'
    },
    iconText:{
        fontSize:35,
        borderRadius:15,
        padding:10,
        borderRadius:10
    },
    CategoriaText:{
        fontWeight:'bold',
        fontSize:18
    },
    subContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'70%'
    },
    contador:{
        fontWeight:'bold'
    }
})