import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'

import styles from '../Home/Home.style'


import Icon from 'react-native-vector-icons/Ionicons'

//components
import AwardsCards from '../../components/AwardsCards'
import InputFieldC from '../../components/InputFieldC'
import ButtonC from '../../components/ButtonC'
import DownloadCards from '../../components/DownloadCards'
import Login from '../Auth/Login'

const Explore = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={{ flex: 1 }} > 

         <Login />     
        
         </View>
      </SafeAreaView>
    </>
  )
}

export default Explore
