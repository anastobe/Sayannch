import React from 'react'
import { Platform, TextInput, View } from 'react-native'


import { grey, InputColor, InputColorTxt } from '../Colors/Color'

//icons
import Icon from 'react-native-vector-icons/Ionicons'



const SearchBar = () => {
  return (
    <>
      <View style={{ borderWidth: 2, borderColor: InputColor, width: '95%', borderRadius: 10, flexDirection: 'row', alignItems: 'center', padding: Platform.OS == "ios" ? 5 : 0 }} >
        <Icon name={'heart-outline'} size={30} color={InputColorTxt} />
        <TextInput placeholder='Search By Product, Brand & More' placeholderTextColor={InputColorTxt} />
      </View>
    </>
  )
}

export default SearchBar
