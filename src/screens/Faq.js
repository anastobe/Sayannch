import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
//styles
import styles from './style'

const Faq = () => {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <ScrollView>
          <View style={styles.outerWrapper}>


            <Text>Faq</Text>



        </View>
        </ScrollView>
      </SafeAreaView>
    </>
    )
}

export default Faq
