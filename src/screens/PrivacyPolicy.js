import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    Image,
    Button
  } from 'react-native'

  //styles
  import styles from "./style"

  //color
  import {grey} from "../Colors/Color"

const PrivacyPolicy = () => {

    const styleUpper = { fontWeight: "bold", marginTop: 30, marginBottom: 20 }


    const array = [
        <Text style={styleUpper} >1. Collection of your Information</Text>,
        <Text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>,
        <Text style={styleUpper} >2. Collection of your Information</Text>,
        <Text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used ic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>,
      ]

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <View style={styles.outerWrapper}>

          <View style={{  height: 40, marginTop: 50 }} >
          <Image  source={require('../assets/images/SayaanchLogo.png')} />
          </View>

          <View>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: grey, marginTop: 60, marginBottom: 30 }} > Privacy Policy </Text>
          </View> 


          <View style={{ margin: 10 }} >
          {array.map((v,i)=>{
         return(
           <View key={i}>
             {v}
           </View>
         )
       })}
          </View>

          </View>
        </SafeAreaView>
        </>
    )
}


export default PrivacyPolicy
