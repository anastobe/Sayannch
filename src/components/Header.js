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

//search 
import SearchBar from './SearchBar'



const Header = () => {
    return (
      <View  style={{ position: 'absolute', top: 0, width: '100%' }} >

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >

        <View>
        <Icon name={'menu-outline'} size={35} color="#000" />
        </View>

        <View style={{  paddingLeft: 30 }} >
        <Image style={{ width: 160, height: 40 }}  source={require('../assets/images/SayaanchLogo.png')} />
        </View>

        <View style={{ flexDirection: 'row' }} >
        <Icon name={'notifications-outline'} size={25} color="#000" style={{ paddingLeft: 0 }} />
        <Icon name={'heart-outline'} size={25} color="#000" style={{ paddingLeft: 8 }}  />
        <Icon name={'add-outline'} size={25} color="#000" style={{ paddingLeft: 8 }}  />
        </View>


            
        </View>

        <View style={{  alignItems: 'center', marginTop: 20 }}>
          <SearchBar />
        </View>
        </View>
    )
}

export default Header
