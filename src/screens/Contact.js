import React, { useEffect, useState } from "react"
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
import { grey, InputColor } from "../Colors/Color"

//component
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"

//scroll
import { ScrollView } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { getAppSettings } from "../stores/actions/settings.action"

const Contact = () => {
  const appSettings = useSelector(state => state.appSettings)

  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  const [Cname, setCname] = useState("")
  const [Bname, setBname] = useState("")
  const [Remarks, setRemarks] = useState("")
  const [Url, setUrl] = useState("")

  const styleUpper = { fontWeight: "bold", marginTop: 30, marginBottom: 20 }
  console.log(appSettings.settings);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAppSettings())
  }, [])

  const array1 = [
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Fname} TextChange={setFname} names="fname" />
      </View>
    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Lname} TextChange={setLname} names="lname" />
      </View>
    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Cname} TextChange={setCname} names="Enter Email" />
      </View>
    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Bname} TextChange={setBname} names="Enter Phone" />
      </View>
    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Remarks} TextChange={setRemarks} names="Message" />
      </View>
    </View>,
    <View>
      <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Url} TextChange={setUrl} names="url" />
      </View>
    </View>,
  ]

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
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
              <ButtonC names="Send Message" />


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
