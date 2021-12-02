import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'

const AwardsCards = ({ navigation }) => {

  const [cards, setcards] = useState([
    {
      Image: require('../assets/images/file.png'),
      LeftTxt: "In publishing and graphic design, on meaningful content.  is available  and graphic design, on meaningful content. and graphic design, on meaningful content. and graphic design, on meaningful content.",
      BottomName: "Rakesh Roshan         ",
      BottomDesignation: "     Director",
    },
    {
      Image: require('../assets/images/file.png'),
      LeftTxt: "In publishing and graphic design, on meaningful content.  is available  and graphic design, on meaningful content. and graphic design, on meaningful content. and graphic design, on meaningful content.",
      BottomName: "Rakesh Roshan         ",
      BottomDesignation: "     Director",
    },
    {
      Image: require('../assets/images/file.png'),
      LeftTxt: "In publishing and graphic design, on meaningful content.  is available  and graphic design, on meaningful content. and graphic design, on meaningful content. and graphic design, on meaningful content.",
      BottomName: "Rakesh Roshan         ",
      BottomDesignation: "     Director",
    },

 
  ])


  return (
    <View>


        {cards.map((v,i)=>{
             return(
              
              <View key={i} style={{borderColor: '#f0f0f0', borderWidth: 2, height: 200, backgroundColor: '#f8f8f8' , padding: 10, margin: 10}} >
              <View style={{ flexDirection: 'row', height: 150, alignItems: 'center' }} >
                  <View style={{ width: '30%', justifyContent: 'center'}} >
                    <Image  style={{  width: 80, height: 80 }} source={v.Image} />
                  </View>
      
                  <View style={{ width: '70%' }} >
                      <Text>{v.LeftTxt}</Text>
                  </View>
              </View>
              
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', borderColor: '#f0f0f0', borderTopWidth: 2, height: 50, paddingTop: 10 }} >
                  <Text>{v.BottomName}</Text><Text>{v.BottomDesignation}</Text>
              </View>


    </View>
     )
   })}

    </View>
  )
}

export default AwardsCards
