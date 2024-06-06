import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase'

export default function Header() {
    const [user,setUser] = useState()

    useEffect(()=>{
        getUser();
    },[])

    const getUser = async()=>{
        const user = await auth.currentUser?.email
        setUser(user);
    }

  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        gap:8,
        alignItems:'center'
    }}>
        <View>
            <Text style={{
                fontSize:18
            }}>             Welcome</Text>
            <Text></Text>
            <Text style={{
                fontSize:16,
                fontWeight:'bold'
            }}>Email: {user}</Text>
        </View>
    </View>
  )
}