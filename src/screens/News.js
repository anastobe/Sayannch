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

  //styles
  import styles from "./style"

  //color
  import {grey} from "../Colors/Color"

  //component
  import NewsCard from "../components/NewsCard"
import { ScrollView } from "react-native-gesture-handler"

//component
import PageLogo from "../components/PageLogo"
import PageHading from "../components/PageHading"
 


const News = () => {

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <ScrollView>
          <View style={styles.outerWrapper}>
            

          <PageLogo />

          <PageHading names="News" />

          <NewsCard />




          </View>
          </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default News
