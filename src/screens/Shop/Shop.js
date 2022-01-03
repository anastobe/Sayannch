import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/Header'

const Shop = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View style={{ paddingLeft: 30 }} >
            <Image style={{ width: 160, height: 40 }} source={require('../../assets/images/SayaanchLogo.png')} />
          </View>

        </View>
      </SafeAreaView>
    </>
  )
}

export default Shop
