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
  import {BtnColor, grey} from "../Colors/Color"
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"
import {LoginSaved} from '../stores/actions/authAction'

//component
import PageLogo from "../components/PageLogo"
import PageHading from "../components/PageHading"
import { connect } from "react-redux"




const VerifyOTP = ({navigation,...props}) => {
const loginRedux = () =>{
props.LoginSaved('Faiz')
navigation.navigate("MyTabs")
}
  const [Opt, setOpt] = useState("")

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <View style={styles.outerWrapper}>


          <PageLogo />

          <PageHading names="VERIFY OTP" />

          <View style={{ borderColor: grey, borderWidth: 1, height: 130, overflow: "hidden", width: '90%', padding: 10 }} >
            <Text style={{ fontSize: 13 }} >VERIFY OTP MY NAME SJDF ASDJSD ANAS HAMED SA GOOGLE EPSILON ASO WE CAN GO FROM NOW</Text>
          </View> 

          <View style={{ width: '90%', marginTop: 20 }} >
            <Text style={{ fontSize: 14,textAlign:'center' }} >Please Enter it below to complete Verification</Text>
          </View> 

          <View style={{ width: '90%' }} >
          <InputFieldC value={Opt} TextChange={setOpt} names="Otp" />  
          </View> 

          <View>
            <TouchableOpacity>

            <Text style={{ fontSize: 13, fontWeight:'bold',justifyContent: "flex-start", textDecorationLine: "underline" }} >Resend</Text>
            </TouchableOpacity>
          </View> 

          <View style={{ width: '90%', marginTop: 20 }} >
            <TouchableOpacity style={{backgroundColor:BtnColor,paddingTop:15,paddingBottom:15}} onPress={loginRedux}>
<Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>Enter</Text>
              {/* <ButtonC  names="Otp" /> */}
            </TouchableOpacity>
              
          </View> 


          </View>
        </SafeAreaView>
        </>
    )
}

const mapStateToProps = state => {
  return {
    // user: state.userReducer.costCalcultorData,
    data: state.authReducer.users

  }

}
const mapDispatchToProps = {

  LoginSaved
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP)