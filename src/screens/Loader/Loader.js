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
    ScrollView,
    ActivityIndicator
  } from 'react-native'

  //styles
  import styles from "./Loader.style"



const Loader = () => {



  
    
    
    return (
    <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <View style={[styles.outerWrapper,{ backgroundColor: '#f4f4f4' }]}> 


        <View>
        <Image  source={require('../../assets/images/SayaanchLogo.png')} />
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} /> 
        </View>




        </View>
        </SafeAreaView>
    </>
    )
}

export default Loader
