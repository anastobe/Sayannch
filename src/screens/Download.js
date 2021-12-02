import React from "react"
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

  //scroll
import { ScrollView } from "react-native-gesture-handler"
import { grey } from "../Colors/Color"

  //styles
  import styles from "./style"

  //component
  import DownloadCards from "../components/DownloadCards"


const Download = () => {
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
            <Text style={{ fontSize: 40, fontWeight: "bold", color: grey, marginTop: 60, marginBottom: 30 }} > Downloads </Text>
          </View> 
          
          <View style={{ width: '90%' }} >
           <DownloadCards />
          </View> 
          
          </View>
          </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Download
