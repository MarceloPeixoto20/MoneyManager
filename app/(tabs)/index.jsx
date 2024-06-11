import { useEffect } from 'react'
import {View, Text, ScrollView, RefreshControl} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Link } from 'expo-router'
import ListarCategoria from '../ListarCategoria'
import { FontAwesome6 } from '@expo/vector-icons';
import {supabase} from '../../utils/supabase'
import {auth} from '../../utils/firebase'

export default function Index(){
    const [user,setUser] = useState()
    const [categorialista, setListaCategoria]=useState()
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        getUser();
    },[])

    const getUser = ()=>{
        const user = auth.currentUser?.email
        setUser(user);
        ListarCategorias()
        console.log(user)
    }

    const ListarCategorias = async() =>{
        setLoading(true)
        const {data, error} = await supabase.from('Categoria').select('*,Categoria_itens(*)').eq('Criado_por',user)
        setListaCategoria(data)
        console.log(data)        
        data&&setLoading(false)
    }

    return(   
        <View>
            <ScrollView refreshControl={<RefreshControl onRefresh={()=>ListarCategorias()} refreshing={loading} />}>
                <View style={{
                    backgroundColor:'#47FC5B',            
                    padding:20,
                    height:100,
                    alignItems:'center'
                }}>     
                    <Header />
                </View>        

                <Link href={'/CadastrarCategoria'} >
                    <FontAwesome6 name="add" size={24} color="black" />
                </Link>

                <ListarCategoria categorialista={categorialista} />
            </ScrollView>
        </View>
    )
}