
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
import { BtnColor, grey } from "../../Colors/Color.js"


const Login = ({ navigation }) => {

  const [email, setemail] = useState("")

  console.log("email==>", email)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View style={styles.outerWrapper}>

            <View style={{ marginTop: 50 }} >
              <PageLogo />
            </View>

            <PageHading names="Login" />

            <View style={{ width: '80%' }} >
              <InputFieldC value={email} TextChange={setemail} names="Email" />
            </View>


            <View style={{ width: '80%' }} >
              <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: BtnColor }}>

                <TouchableOpacity onPress={() => navigation.navigate("VerifyOTP")} >
                  <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>



            <View>
              <Text style={{ fontWeight: "bold", textDecorationLine: 'underline', marginTop: 20, marginBottom: 10 }} >Forgot Password?</Text>
            </View>

            <View style={{ margin: 5, flexDirection: "row" }} >
              <Text style={{ fontSize: 16, color: "#000" }} >Don't have an account </Text>

              <TouchableOpacity onPress={() => navigation.navigate("Register")} >
                <Text style={{ fontWeight: "bold", textDecorationLine: "underline", fontSize: 16 }} > Sign Up? </Text>
              </TouchableOpacity>

            </View>

            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: grey }}>OR</Text>
            </View>

            <View>
              <Text style={{ fontSize: 12, color: grey }} >LOGIN WITH</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }} >
              <Image style={{ width: 40, height: 40, marginRight: 20 }} source={require('../../assets/images/facebook.png')} /><Image style={{ width: 40, height: 40, }} source={require('../../assets/images/google.png')} />
            </View>

            <View style={{ margin: 20, flexDirection: "row" }} >
              <Text style={{ fontSize: 14, color: grey }} >Continue Without Login </Text>
              <TouchableOpacity onPress={() => navigation.navigate("MyTabs")} >
                <Text style={{ fontWeight: "bold", textDecorationLine: "underline", fontSize: 14 }} > Skip </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )


}

export default Login
