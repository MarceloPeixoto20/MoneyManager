import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Listaitens({Itenscategoria}) {
  return (
    <View style={styles.container}>
      <Text>Lista de Itens:</Text>
      <View style={{marginTop:15}}>
        {Itenscategoria?.Categoria_itens?.length>0?Itenscategoria?.Categoria_itens?.map((item,index)=>(
            <View key={index} style={styles.itemcontainer}>
                <Text style={{fontSize:24, backgroundColor:'#1D1DF0',padding:15,borderRadius:15}}>{item.icon}</Text>
            <View style={{flex:1,marginLeft:10}}>                 
                <Text style={{fontSize:20, fontWeight:'bold'}}>{item.nome}</Text>
                <Text style={{fontSize:10}}>Descrição: {item.descricao}</Text>                
            </View>
            <Text style={{marginRight:20,fontWeight:'bold',fontSize:20}}>R$:{item.Custo}</Text>
            {Itenscategoria.Categoria_itens.length-1!=index&&
            <View style={{borderWidth:0.5,marginTop:10,borderBlockColor:'#ACBEDB'}}></View>
            }
        </View>
        )):
        <View>
            <Text style={{fontWeight:'bold',fontSize:20}}>Nenhum Item Achado</Text>
        </View>
        }
        
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    itemcontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
})