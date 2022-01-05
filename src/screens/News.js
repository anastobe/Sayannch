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

//styles
import styles from "./style"

//color
import { grey } from "../Colors/Color"

//component
import NewsCard from "../components/NewsCard"
import { ScrollView } from "react-native-gesture-handler"

//component
import { getApi } from "../api/fakeApiUser"
import { base_url } from "../utils/baseUrl"
import { useSelector } from "react-redux"
import Header from "../components/Header"




const News = ({navigation}) => {
  const appSettings = useSelector(state => state.appSettings)

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {
    const { data, status } = await getApi(`${base_url}/news`, "")
    console.log(data);
    setNews(data.result)
  }


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View style={styles.outerWrapper}>
          
          <Header
            menuIconPress={() => navigation.toggleDrawer()}
            name="invisinble"
          />

            <View>
              <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 200, height: 100 }} />
            </View>

            <View>
              <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, }} > News </Text>
            </View>

            <View>
              <FlatList
                data={news}
                scrollEnabled={false}
                renderItem={({ item }) => {
                  return <NewsCard
                    {...item} />
                }}
                ListEmptyComponent={
                  <Text style={{ textAlign: "center", marginTop: 40, fontSize: 16}}>No News found</Text>
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default News
