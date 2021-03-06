import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// //screens
import Home from '../screens/Home/Home.screen'
import Account from '../screens/Account/Account'
import Shop from '../screens/Shop/Shop'
import Explore from '../screens/Explore/Explore'
import Login from '../screens/Auth/Login'
import VerifyOTP from '../screens/VerifyOTP'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import Report from '../screens/Report'
import Download from '../screens/Download'
import Register from '../screens/Register'
import MeetOurTeams from '../screens/MeetOurTeam'
import News from '../screens/News'

//icon
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#003C68"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'home-outline'} size={25} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'grid-outline'} size={25} color={color} />
          }
        }}
      />
      {/* <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'compass-outline'} size={25} color={color} />
          }
        }}
      /> */}
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'person-circle-outline'} size={25} color={color} />
          }
        }}
      />
      
    </Tab.Navigator>

  )
}

export default BottomNavigation
