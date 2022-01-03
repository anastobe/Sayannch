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
import { grey } from "../Colors/Color"
import { useSelector } from "react-redux"

const PrivacyPolicy = () => {
  const appSettings = useSelector(state => state.appSettings)
  const styleUpper = { fontWeight: "bold", marginTop: 20, marginBottom: 20 }


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
          
          <View style={{}} >
            <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 200, height: 100 }} />
          </View>

          <View>
            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, }} > Privacy Policy </Text>
          </View>


          <View style={{ margin: 15 }} >
            {array.map((v, i) => {
              return (
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
