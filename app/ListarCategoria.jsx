import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function ListarCategoria({categorialista}) {
    
    
  return (
        <View>
        <View style={{marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>Lista das Categoria: </Text>
        </View>
        <View>
            {categorialista?.map((categoria,index)=>(
                <View key={index} style={Styles.container}>
                    <View style={Styles.iconContainer}>
                        <Text>{categoria.icon}</Text>
                    </View>
                    <View style={Styles.subContainer}>
                        <View>
                            <Text style={Styles.CategoriaText}>{categoria.nome}</Text>
                            <Text style={Styles.Contador}>{categoria?.Categoria_itens?.length}</Text>
                        </View>
                        <View>
                            <Text>Total</Text>
                        </View>
                    </View>
                </View>
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
        borderRadius:15
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