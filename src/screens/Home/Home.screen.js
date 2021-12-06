import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native'

import styles from './Home.style'

//header Component
import Header from '../../components/Header'


const Home = () => {      

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>



          <Text>Home</Text>



      
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
