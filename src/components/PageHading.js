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
import { grey } from "../Colors/Color"
import style from "../screens/style";


const PageHading = (props) => {

    console.log("====>",props.names);

    const sty={ fontSize: 40, fontWeight: "bold", color: grey, marginTop: 60, marginBottom: 30  }

    return (
        <View>
        <Text style={sty} >{ 
        
        props.names== "Login" ?  "Login" : 
        props.names== "News" ?  "News" : 
        props.names== "VERIFY OTP" ?  "VERIFY OTP" : 
        
        ""
       
       }</Text>
      </View>
    )
}

export default PageHading