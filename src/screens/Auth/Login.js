
import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    Image,
    Button,
    ScrollView
  } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

//component
import PageHading from "../../components/PageHading.js"
import PageLogo from "../../components/PageLogo.js"
import InputFieldC from "../../components/InputFieldC.js"

//styles
import styles from "./Auth.style.js"

//button
import ButtonC from "../../components/ButtonC.js"

//Color
import { grey } from "../../Colors/Color.js"


const Login = () => {

  const [email, setemail] = useState("")

    return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
        <View style={styles.outerWrapper}>

          
          <PageLogo />

          <PageHading names="Login" />

          <View style={{ width: '80%'  }} >
          <InputFieldC value={email} TextChange={setemail} names="Email" />
            {/* <InputFieldC value={Email} InputPlaceHolderValue={SetEmail} names="Email" /> */}
            {/* Enter Email-ID | Mobile Number  */}
          </View>


          <View style={{ width: '80%' }} >
            <ButtonC names="Login" />
          </View>

          
          <View>
            <Text style={{ fontWeight: "bold", textDecorationLine: 'underline', marginTop: 25, marginBottom: 50 }} >Forgot Password?</Text>
          </View>

          <View>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: grey }}>OR</Text>
          </View>

          <View>
          <Text style={{ fontSize: 20, color: grey }} >LOGIN WITH</Text>
          </View>

          <View style={{flexDirection: "row", marginTop: 20 }} >
          <Image style={{ width:40, height: 40, marginRight: 20 }}  source={require('../../assets/images/facebook.png')} /><Image  style={{ width:40, height: 40, }}   source={require('../../assets/images/google.png')} />
          </View>
 
 
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
    )


}

export default Login
