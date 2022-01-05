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
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons'

const AwardsCards = ({
  navigation,
  description = "",
  image = "",
  title = "",
  youtube_link = ""
}) => {


  return (
    <View>

      <View style={{ borderColor: '#f0f0f0', borderWidth: 2, backgroundColor: '#f8f8f8', padding: 10, margin: 10, borderRadius: 10, paddingVertical: 10 }} >
        <View style={{ flexDirection: 'row' }} >
          <View style={{ width: '30%' }} >
            <Image style={{ width: 80, height: 80 }} source={{ uri: image }} />
          </View>

          <View style={{ width: '70%' }} >
            <HTMLView
              value={description}
            // stylesheet={styles}
            />

            {youtube_link  ? <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Ionicons name={"link"} size={20} />
              <HTMLView
                value={`<a href="${youtube_link}">${youtube_link}</a>`}
              />
            </View> : null}
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', borderColor: '#f0f0f0', borderTopWidth: 2, height: 50, paddingTop: 10 }} >
          <Text>{title}</Text>
          {/* <Text>{v.BottomDesignation}</Text> */}
        </View>


      </View>

    </View>
  )
}

export default AwardsCards
