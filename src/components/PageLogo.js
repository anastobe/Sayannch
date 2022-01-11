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

const PageLogo = (props) => {

    // console.log("page logo ===>",props.styles)

    return (
        <View style={{  height: 60 }} >
        <Image  source={require('../assets/images/SayaanchLogo.png')} />
        </View>
    )
}

export default PageLogo
