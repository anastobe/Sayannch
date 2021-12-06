import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  InputField,
  Button
} from 'react-native'

//color
import { BtnColor } from '../Colors/Color'

const ButtonC = (params,{navigation}) => {  

  console.log("btn ==>",params.login)




//style
  var buttonContainer = {
    alignItems: 'center', backgroundColor: BtnColor , height: 55, borderRadius: 10 , marginTop: 30
  }

  var buttonText = {
    color: "#fff", lineHeight: 55, fontWeight: 'bold', fontSize: 25 
  }

  {params.login === 'Login' ? "Login" : 
  
  "Null" }

  return (
      <View style={buttonContainer} >

        <Text style={buttonText}  onPress={ ()=> navigation.navigate("MyTabs")}>  
  
        {params.names === 'Login' ? "LOGIN" : 
        params.names === 'Otp' ? "SIGN IN" : 
        params.names === 'Submit' ? "SUBMIT" : 
        params.names === 'Download' ? "DOWNLOAD" : 
        params.names === 'Register' ? "SIGN UP" : 

        //contact page 
        params.names === 'Send Message' ? "Send Message" : 

        "Null" }


  </Text>
      
      </View>
  )
}

export default ButtonC
