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

//color



const MeetOurTeams = () => {

    const [cards, setcards] = useState([
      {
        Image: require('../assets/images/file.png'),
        name: "Andrew",
        section: "Project Manager",
      },
      {
        Image: require('../assets/images/google.png'),
        name: "Simona",
        section: "Product Manager",
      },
      {
        Image: require('../assets/images/google.png'),
        name: "Andrew",
        section: "Manager",
      },
      {
        Image: require('../assets/images/file.png'),
        name: "Anderson",
        section: "Project Manager",
      },
    ])


    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <ScrollView>
          <View style={styles.outerWrapper}>


          <View style={{  height: 40, marginTop: 50 }} >
          <Image  source={require('../assets/images/SayaanchLogo.png')} />
          </View>

          <View>
            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, marginTop: 50, marginBottom: 20 }} >MEET OUR TEAM</Text>
          </View> 

          <View style={{ flexDirection: "row" , width: '90%', flexWrap: "wrap", justifyContent: "space-between" }} >

           {cards.map((v,i)=>{
             return(
              
              <View key={i} style={{ alignItems: "center", width: '50%', marginTop: 30  }} >
              <Image style={{ width: 120, height: 120 }}  source={v.Image} />
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
