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
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"


//component
import PageLogo from "../components/PageLogo"
import PageHading from "../components/PageHading"




const VerifyOTP = () => {

  const [Opt, setOpt] = useState("")

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <View style={styles.outerWrapper}>


          <PageLogo />

          <PageHading names="VERIFY OTP" />

          <View style={{ borderColor: grey, borderWidth: 1, height: 130, overflow: "hidden", width: '90%', padding: 10 }} >
            <Text style={{ fontSize: 20 }} >VERIFY OTP MY NAME SJDF ASDJSD ANAS HAMED SA GOOGLE EPSILON ASO WE CAN GO FROM NOW</Text>
          </View> 

          <View style={{ width: '90%', marginTop: 20 }} >
            <Text style={{ fontSize: 18, }} >Please Enter it below to complete Verification</Text>
          </View> 

          <View style={{ width: '90%' }} >
          <InputFieldC value={Opt} TextChange={setOpt} names="Otp" />  
          </View> 

          <View>
            <Text style={{ fontSize: 18, justifyContent: "flex-start", textDecorationLine: "underline" }} >Resend</Text>
          </View> 

          <View style={{ width: '90%', marginTop: 20 }} >
              <ButtonC  names="Otp" />
          </View> 


          </View>
        </SafeAreaView>
        </>
    )
}

export default VerifyOTP
