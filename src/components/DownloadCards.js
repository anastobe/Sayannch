import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  InputField,
  Button,
  Image
} from 'react-native'
import { grey } from '../Colors/Color'
import ButtonC from './ButtonC'


//image
// import File from "../assets/images/file.png"



const DownloadCards = ({
  image = "",
  filename = ""
}) => {

  return (
    <>

      <View style={{ padding: 10, borderColor: '#f0f0f0', borderWidth: 2, margin: 10, justifyContent: 'center' }} >

        <View style={{ alignItems: 'center' }} >
          <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
        </View>

        <View style={{ alignItems: 'center', margin: 20 }} >
          <Text style={{ color: grey, fontWeight: 'bold', fontSize: 20 }} >{filename}</Text>
        </View>
        <ButtonC names="Download" />

      </View>
    </>



  )
}

export default DownloadCards
