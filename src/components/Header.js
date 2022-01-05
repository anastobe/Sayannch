import { CurrentRenderContext } from '@react-navigation/core'
import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'

//search 
import SearchBar from './SearchBar'



const Header = ({
  menuIconPress = () => { }, name
},) => {

//  console.log("value==>",name) 

  const appSettings = useSelector(state => state.appSettings)

  return (
    <View style={{  width: '100%', paddingHorizontal: 10 }} >

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >

        <TouchableOpacity onPress={menuIconPress}>
          <Icon name={'menu-outline'} size={35} color="#000" />
        </TouchableOpacity>

        <View style={{ paddingLeft: 30 }} >
          {/* <Image style={{ width: 160, height: 40 }} source={require('../assets/images/SayaanchLogo.png')} /> */}
          <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 160, height: 70 }} />
        </View>

        <View style={{ flexDirection: 'row' }} >
          <Icon name={'notifications-outline'} size={25} color="#000" style={{ paddingLeft: 0 }} />
          <Icon name={'heart-outline'} size={25} color="#000" style={{ paddingLeft: 8 }} />
          <Icon name={'cart-outline'} size={25} color="#000" style={{ paddingLeft: 8 }} />
        </View>

      </View>

      { name =='invisinble' ? <></> : <View style={{ alignItems: 'center', marginTop: 5, paddingBottom: 10 }}>
        <SearchBar />
      </View>}


    </View>
  )
}

export default Header
