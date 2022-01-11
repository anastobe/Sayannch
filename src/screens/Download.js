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
  Dimensions,
  FlatList
} from 'react-native'

//scroll
import { ScrollView } from "react-native-gesture-handler"
import { grey } from "../Colors/Color"

//styles
import styles from "./style"

//component
import DownloadCards from "../components/DownloadCards"
import { useDispatch, useSelector } from "react-redux"
import { getAppSettings } from "../stores/actions/settings.action"
import { getApi } from "../api/fakeApiUser"
import { base_url } from "../utils/baseUrl"
import Header from "../components/Header"

const { width } = Dimensions.get("screen")

const Download = ({navigation}) => {
  const appSettings = useSelector(state => state.appSettings)
  const [downloads, setdownloads] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAppSettings())
  }, [])

  useEffect(() => {
    getDownloads()
  }, [])

  const getDownloads = async () => {
    const { data, status } = await getApi(`${base_url}/download`, "")
    setdownloads(data.result)
    console.log("==>",data);
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

            <View style={{}} >
              <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: width / 1.7, height: 100 }} />
            </View>

            <View>
              <Text style={{ fontSize: 40, fontWeight: "bold", color: grey }} > Downloads </Text>
            </View>

            {/* <View style={{ width: '90%' }} >
              <FlatList
                data={downloads}
                scrollEnabled={false}
                renderItem={({ item }) => {
                  return <DownloadCards {...item} />
                }}
                ListEmptyComponent={
                  <Text style={{ textAlign: "center", marginTop: 40, fontSize: 16}}>No downloads found</Text>
                }
              />
            </View> */}

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Download
