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
import { ScrollView } from "react-native-gesture-handler"


import { grey } from "../Colors/Color"



const NewsCard = ({
  title = "",
  descrition = ""
}) => {


  const [card, setcard] = useState([
    {
      LeftHeading: "asdjlaslasdasdcccccccccccadidjasldi",
      LeftSubHeading: "asdjlaslidjasldi",
      LeftDate: "asdjlaslidjasldi",
    },
    {
      LeftHeading: "asdjlasasdlidjasldi",
      LeftSubHeading: "asdjlaslidjasldi",
      LeftDate: "asdjlasliasddjasldi",
    },
    {
      LeftHeading: "asdjlaslidjasldi",
      LeftSubHeading: "asasddjlaslidjasldi",
      LeftDate: "asdjlaslidjasldi",
    },
    {
      LeftHeading: "asdjlasdaslidjasldi",
      LeftSubHeading: "asdjlaslidjasldi",
      LeftDate: "asdjlaslidjasldi",
    },
    {
      LeftHeading: "asdjlaslzxcidjasldi",
      LeftSubHeading: "asdjlzxczxcaslidjasldi",
      LeftDate: "asdjlaslidzxcczcjasldi",
    },
  ])

  return (
    <>
          <View  style={{ width: '90%', flexDirection: "row", borderColor: grey, borderWidth: 1, padding: 10, margin: 10, overflow: "hidden" }} >
            <View style={{ width: '60%' }} >
              <View >
                <Text style={{ fontWeight: "bold", fontSize: 20 }} >{title}</Text>
              </View>

              <View>
                <Text style={{ fontSize: 17 }}>{descrition}</Text>
              </View>

              <View>
                <Text style={{ fontSize: 14 }}>Google is Refinj</Text>
              </View>
            </View>

            <View style={{ width: '40%', justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 100, height: 100 }} source={require('../assets/images/SayaanchLogo.png')} />
            </View>
          </View>
    </>
  )
}

export default NewsCard
