import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Itens({CategoriaItens}) {
    
    useEffect(()=>{
        
        console.log(CategoriaItens)
    })
  return (
    <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Text style={[styles.textIcon,{backgroundColor:'#1D1DF0'}]}>{CategoriaItens.icon}</Text>
            </View>
            <View style={{flex:1,marginLeft:20}}>
                <Text style={styles.categorianome}>{CategoriaItens.Nome}</Text>
                <Text style={styles.categoriaitem}>Itens: {CategoriaItens?.Categoria_itens?.length}</Text>
            </View>
            <Ionicons name='trash' size={24} color={'red'} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textIcon:{
        fontSize:20,
        padding:20,
        borderRadius:15
    },
    iconContainer:{
        justifyContent:'center',
        alignItems:'baseline'
    },
    categoriaitem:{

    },
    categorianome:{
        fontFamily:'Arial',
        fontSize:16

    }
})