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

  //icons
  import Ionicons from 'react-native-vector-icons/Ionicons'

  //scroll
  import { ScrollView } from "react-native-gesture-handler"
  import { grey, BtnColor } from "../Colors/Color"

  //styles
  import styles from "./style"

  //component
  import DownloadCards from "../components/DownloadCards"
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"

//color



const Register = () => {

    const [check, setcheck] = useState(false)

    const [NameR, setNameR] = useState("")
    const [MobileR, setMobileR] = useState("")
    const [EmailR, setEmailR] = useState("")
    const [PassR, setPassR] = useState("")

    const array1Register = [
        <View>
            <View style={{ marginBottom: -35 }} >
            <InputFieldC value={NameR} TextChange={setNameR} names="NameR" />          
            </View>      
        </View>,
            <View>
            <View style={{ marginBottom: -35 }} >
            <InputFieldC value={MobileR} TextChange={setMobileR} names="MobileR" />         
            </View>      
        </View>,
            <View>
            <View style={{ marginBottom: -35 }} >
            <InputFieldC value={EmailR} TextChange={setEmailR} names="EmailR" />     
            </View>      
        </View>,
            <View>
            <View style={{ marginBottom: -35 }} >
            <InputFieldC value={PassR} TextChange={setPassR} names="PassR" />           
            </View>      
        </View>
          ]

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <ScrollView>
          <View style={styles.outerWrapper}>


          <View style={{  height: 40, marginTop: 50 }} >
          <Image  source={require('../assets/images/SayaanchLogo.png')} />
          </View>

          <View>
            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, marginTop: 50, marginBottom: 20 }} > LET'S REGISTER </Text>
          </View> 

          <View style={{ width: '90%'  }} >
          {array1Register.map((v,i)=>{
         return(
           <View key={i}>
             {v}
           </View>
         )
       })}
          </View>

          {/* <Ionicons name={"checkmark-outline"} size={28} color={'black'} */}

          <View style={{ flexDirection: "row", alignItems: "center", height: 70, marginTop: 30 }} >
            <View style={{ borderColor: "#000", borderWidth: 1, height: 30, width: 30 }} >
            <Text onPress={ ()=> setcheck(!check) } > {check ? <Ionicons name={"checkmark-outline"} size={23} color={'black'} /> : "" } </Text>
            </View>
            <View style={{ marginLeft: 10 }} >
                <Text style={{ fontSize: 16 }} >by Continuing, you agree to</Text>
                <View style={{ flexDirection: "row" }} >
                <Text style={{ color: BtnColor, fontWeight: "bold", textDecorationLine: "underline",  fontSize: 16 }} >Condition of use</Text><Text style={{ fontSize: 16  }} >  and  </Text><Text  style={{ color: BtnColor, fontWeight: "bold", textDecorationLine: "underline", fontSize: 16  }}  >Privacy Policy</Text>
                </View>
            </View>
          </View>

          <View style={{ width: '90%', margin: 25 }} >
              <ButtonC names="Register" />
          </View>

          <View>
              <Text style={{  fontSize: 15 }} >Already Have an account Click. <Text style={{ color: BtnColor, fontSize: 15 }} > Here </Text> to Login </Text>  
          </View>


          </View>
          </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Register
