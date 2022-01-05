import React, { useState } from "react"
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

//icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//scroll
import { ScrollView } from "react-native-gesture-handler"
import { grey, BtnColor } from "../Colors/Color"

//styles
import styles from "./style"

//component
import DownloadCards from "../components/DownloadCards"
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"
import { useSelector } from "react-redux"
import Header from "../components/Header"

//color



const MeetOurTeams = ({navigation}) => {
  const appSettings = useSelector(state => state.appSettings)
  const [cards, setcards] = useState([
    {
      Image: require('../assets/images/person.jpg'),
      name: "Andrew",
      section: "Project Manager",
    },
    {
      Image: require('../assets/images/person2.jpg'),
      name: "Andrew",
      section: "Manager",
    },
    {
      Image: require('../assets/images/person.jpg'),
      name: "Simona",
      section: "Product Manager",
    },
    {
      Image: require('../assets/images/person.jpg'),
      name: "Simona",
      section: "Product Manager",
    },
  ])


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
              <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 200, height: 100 }} />
            </View>

            <View>
              <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, textTransform: "uppercase", width: "90%" }} numberOfLines={1} adjustsFontSizeToFit > MEET OUR TEAM </Text>
            </View>

            <View style={{ flexDirection: "row", width: '90%', flexWrap: "wrap", justifyContent: "space-between" }} >

              {cards.map((v, i) => {
                return (

                  <View key={i} style={{ alignItems: "center", width: '50%', marginTop: 30 }} >
                    <Image style={{ width: 120, height: 120 }} source={v.Image} />
                    <Text>{v.name}</Text>
                    <Text>{v.section}</Text>
                    <Text>______</Text>
                  </View>

                )
              })

              }

            </View>


          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default MeetOurTeams
