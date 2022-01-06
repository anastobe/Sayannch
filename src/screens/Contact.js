import React, { useEffect, useState } from "react"
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  Button,
  ActivityIndicator,
  
} from 'react-native'

//styles
import styles from "./style"

//color
import { BtnColor, grey, InputColor } from "../Colors/Color"

//component
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"

//scroll
import { ScrollView } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { getAppSettings } from "../stores/actions/settings.action"
import { base_url } from "../utils/baseUrl"
import { PostApiWithOutToken } from "../api/fakeApiUser"

const Contact = () => {
  const appSettings = useSelector(state => state.appSettings)

  const [Fname, setFname] = useState("")
  const [FnameError, setFnameError] = useState("")

  const [Lname, setLname] = useState("")
  const [LnameError, setLnameError] = useState("")

  const [Cname, setCname] = useState("")
  const [CnameError, setCnameError] = useState("")

  const [Bname, setBname] = useState("")
  const [BnameError, setBnameError] = useState("")

  const [Remarks, setRemarks] = useState("")
  const [RemarksError, setRemarksError] = useState("")

  const [Url, setUrl] = useState("")
  const [UrlError, setUrlError] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const styleUpper = { fontWeight: "bold", marginTop: 30, marginBottom: 20 }
  console.log(appSettings.settings);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAppSettings())
  }, [])

  const hadleFirst = () =>{
    setFnameError(Fname ? '':'Please Enter First Name')
    setLnameError(Lname ? '':'Please Enter Last Name')
    setCnameError(Cname ? '':'Please Enter Email')
    setBnameError(Bname ? '':'Please Enter Phone Number')
    setRemarksError(Remarks ? '':'Please Enter Message')
    setUrlError(Url ? '':'Please Enter Product Url')


    // setRepeatPassword(repeatPassword ? '':'Please ReEnter Your Password')
    // setRepeatPasswordError(repeatPassword ? (createPassword == repeatPassword ? "":"Password not match" ):'Please ReEnter Your Password')
    
    const errors = FnameError && LnameError && CnameError && BnameError && RemarksError&& UrlError
    const values = Fname && Lname && Cname && Bname && Remarks &&Url
    
    if(!errors && values ){
    return true
    }else {
        return false
    
    }
    
        }

  const request = () => {
             
if(hadleFirst()){


setIsLoading(true)



var formdata = new FormData();

formdata.append("first_name",Fname);
formdata.append("last_name",Lname );
formdata.append("email",Cname );
formdata.append("phone",Bname );
formdata.append("message",Remarks );





console.log("fomdata",formdata)

PostApiWithOutToken(`${base_url}/contact-us-save`,formdata)

// https://clo.devoa.xyz/api/user/register
.then(({ data ,status }) => {
console.log('data',data)
setIsLoading(false)
if (data.status) {
// showMessage({
// message: "Failed",
// description: data.message,
// type: 'danger',
// floating: true
// })
alert(data.message )
return
} 
alert(data.errors.email )

// showMessage({
// message: "Success",
// description: data.message,
// type: "success",
// floating: true
// })

// navigation.navigate('ComparePrices',data)

}).catch((e) => {
// this.setState({ isLoading: false })
setIsLoading(false)
alert(e )

// showMessage({
// message: "Failed",
// description: e.message,
// type: "danger",
// floating: true
// })

})


}
// navigation.navigate("VerifyPhone") 

}
  const array1 = [
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Fname} TextChange={setFname} names="fname" />
      </View>
      {FnameError ? <Text style={{color:'red'}}>{FnameError}</Text>:null}

    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Lname} TextChange={setLname} names="lname" />
      </View>
      {LnameError ? <Text style={{color:'red'}}>{LnameError}</Text>:null}

    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Cname} TextChange={setCname} names="Enter Email" />
      </View>
      {CnameError ? <Text style={{color:'red'}}>{CnameError}</Text>:null}
      
    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Bname} TextChange={setBname} names="Enter Phone" />
      </View>
      {BnameError ? <Text style={{color:'red'}}>{BnameError}</Text>:null}

    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Remarks} TextChange={setRemarks} names="Message" />
      </View>
      {RemarksError ? <Text style={{color:'red'}}>{RemarksError}</Text>:null}

    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Url} TextChange={setUrl} names="url" />
      </View>
      {UrlError ? <Text style={{color:'red'}}>{UrlError}</Text>:null}

    </View>,
  ]

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
      {

isLoading &&

<View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>

  <ActivityIndicator size="large" color={BtnColor} />

</View>
}
        <ScrollView>
          <View style={styles.outerWrapper}>

            <View style={{  }} >
              <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 200, height: 100 }} />
            </View>

            <View>
              <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, }} > Contact Us </Text>
            </View>

            <View style={{ width: '90%' }} >
              {array1.map((v, i) => {
                return (
                  <View key={i}>
                    {v}
                  </View>
                )
              })}

              {/* button */}
              <View style={{ width: '90%', marginTop: 20,alignSelf:'center' }} >
            <TouchableOpacity style={{backgroundColor:BtnColor,paddingTop:15,paddingBottom:15}} onPress={request}>
<Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>Send</Text>
              {/* <ButtonC  names="Otp" /> */}
            </TouchableOpacity>
              
          </View> 


            </View>



            {/* <View style={{ width: '90%' }} >
              {array2.map((v, i) => {
                return (
                  <View style={{ marginTop: 30 }} key={i}>
                    {v}
                  </View>
                )
              })}
            </View> */}

            <View style={{ width: '90%', marginTop: 30 }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, textTransform: "uppercase" }} >Adress</Text>
              <Text style={{ color: "#2A2A2A", fontSize: 16, marginTop: 5, lineHeight: 20 }} >{appSettings.settings.address}</Text>
            </View>

            <View style={{ width: '90%', marginTop: 30 }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, textTransform: "uppercase" }} >General Assistance</Text>
              <Text style={{ color: "#2A2A2A", fontSize: 16, marginTop: 5, lineHeight: 20 }} >{appSettings.settings.admin_email}</Text>
            </View>

            <View style={{ width: '90%', marginTop: 30 }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, textTransform: "uppercase" }} >Merchantdizing Team</Text>
              <Text style={{ color: "#2A2A2A", fontSize: 16, marginTop: 5, lineHeight: 20 }} >{appSettings.settings.admin_contact}</Text>
            </View>

            <View style={{ width: '90%', marginTop: 30 }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, textTransform: "uppercase" }} >Mobile No</Text>
              <Text style={{ color: "#2A2A2A", fontSize: 16, marginTop: 5, lineHeight: 20 }} >+{appSettings.settings.contact_number1} </Text>
              <Text style={{ color: "#2A2A2A", fontSize: 16, marginTop: 5, lineHeight: 20 }} >+{appSettings.settings.contact_number2} </Text>
              <Text style={{ color: "#2A2A2A", fontSize: 16, marginTop: 5, lineHeight: 20 }} >+{appSettings.settings.contact_number3}</Text>
            </View>



          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}


export default Contact
