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
  FlatList
} from 'react-native'

//scroll
import { ScrollView } from "react-native-gesture-handler"
import { grey, BtnColor } from "../Colors/Color"

//Header
import Header from "../components/Header"

//styles
import styles from "./style"

//COMPONNENT
import { getApi } from "../api/fakeApiUser"
import { base_url } from "../utils/baseUrl"
import HTMLView from "react-native-htmlview"



const Videos = ({navigation}) => {


  const [VideosCard, setVideosCard] = useState([]);

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const { data, status } = await getApi(`${base_url}/user-youtube-links`, "")
    setVideosCard(data.result)        
    }


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View style={styles.outerWrapper}>
          <Header
            menuIconPress={() => navigation.toggleDrawer()}
            name="invisinble"  />


             <View>
              <FlatList
                data={VideosCard}
                scrollEnabled={false}
                renderItem={( {item} ) => {
                    console.log("map==>",item)
                  return(
                  <HTMLView
                 value={item.description}
               />
                 )}}
                ListEmptyComponent={
                  <Text style={{ textAlign: "center", marginTop: 40, fontSize: 16}}>No VideosCards found</Text>
                }
              />
            </View>
           

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Videos
