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

  //scroll
  import { ScrollView } from "react-native-gesture-handler"
  import { grey, BtnColor } from "../Colors/Color"
  
  //styles
  import styles from "./style"
  
  //COMPONNENT
  import AwardsCards from "../components/AwardsCards"



const Testimonials = () => {


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
            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, marginTop: 50, marginBottom: 20 }} >TESTIMONIALS</Text>
          </View> 

          <View>
            <AwardsCards />
          </View> 



          </View>
          </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Testimonials
