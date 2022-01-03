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

//styles
import styles from "./style"

//COMPONNENT
import AwardsCards from "../components/AwardsCards"
import { useSelector } from "react-redux"
import { getApi } from "../api/fakeApiUser"
import { base_url } from "../utils/baseUrl"



const Testimonials = () => {
  const appSettings = useSelector(state => state.appSettings)

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials()
  }, [])

  const getTestimonials = async () => {
    const { data, status } = await getApi(`${base_url}/user-testimonials`, "")
    console.log(data);
    setTestimonials(data.result)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View style={styles.outerWrapper}>

            <View style={{}} >
              <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 200, height: 100 }} />
            </View>

            <View>
              <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, textTransform: "uppercase", width: "90%" }} numberOfLines={1} adjustsFontSizeToFit > TESTIMONIALS </Text>
            </View>

            <View>
              <FlatList
                data={testimonials}
                scrollEnabled={false}
                renderItem={({ item }) => {
                  return <AwardsCards
                    {...item}  
                   />
                }}
              />
            </View>



          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Testimonials
