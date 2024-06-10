import {View, Text, Touchable, TouchableOpacity, LogBox} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "../login/style"
import { Button, SocialIcon } from "react-native-elements"
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Image
} from "react-native"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../utils/firebase'
import { Redirect, useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native'
import TabsLayout from './_layout'

export default function TelaLogin(){
    LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);    
    const navigation = useNavigation()
    const router = useRouter();    
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {        
        if (user) {
          
        }else{
          console.log("Erro")
        }
      })
      
      return unsubscribe
    }, [])

    
    const Registrar = async () => {
      setLoading(true)
        try{
          const response = await createUserWithEmailAndPassword(auth, email, senha)
          .then(userCredentials =>{
            const user = userCredentials.user
            console.log(user.email)
          })
          .catch(error => alert(error.message))
          
        }catch(error){
          Alert.alert('Falha no Registro: ' + error.message)
        }finally{
          Alert.alert('Sucesso no Registro')
          setLoading(false)
        }
    }
      
    const Login = async () => {
      setLoading(true)
      try{        
        const response = await signInWithEmailAndPassword(auth, email, senha)
        .then(userCredentials => {
          const user = userCredentials.user
          console.log('Realizou Login com', user.email)          
        })
        setLoading(false)
      }catch(error){
          Alert.alert('Falha no Login: '+ error.message);
        }finally{
          setLoading(false)
        }
        
    }


    return (     
      
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
        <Image
              resizeMode="contain"
              style={{
                height: 180,
                width: 220,
              }}
              source={require("../../assets/images/login.png")}
            />
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>MoneyManager</Text>
            <TextInput
              value={email}
              placeholder="email"
              placeholderColor="#c4c3cb"
              autoCapitalize='none'
              onChangeText={(text) => setEmail(text)}
              style={styles.loginFormTextInput}
            />
            <TextInput
              value={senha}
              placeholder="senha"
              placeholderColor="#c4c3cb"
              autoCapitalize='none'
              onChangeText={(text) => setSenha(text)}
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={Login}
              title="Login"
            />
            <Button
              buttonStyle={styles.RegisterButton}
              onPress={Registrar}
              title="Registrar"
            />               
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
    )
}
