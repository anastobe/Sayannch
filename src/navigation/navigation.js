import React from 'react';


//screens
import Home from '../screens/Home/Home.screen'
import Account from '../screens/Account/Account'
import Shop from '../screens/Shop/Shop'
import Explore from '../screens/Explore/Explore'
import Login from '../screens/Auth/Login'
import News from '../screens/News'
import VerifyOTP from '../screens/VerifyOTP'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import Report from '../screens/Report'
import Download from '../screens/Download'
import Register from '../screens/Register'
import MeetOurTeams from '../screens/MeetOurTeam'



//functions
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'
import Testimonials from '../screens/Testimonials'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()




export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name={'ios-home'} size={25} color={color} />
            }
          }}
        />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
            <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}







const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        
        <Stack.Screen
            name="MyTabs"
            options={{ headerShown: false }}
            component={MyTabs}
          />



      <Stack.Screen
          name="Testimonials"
          options={{ headerShown: false }}
          component={Testimonials}
        />      
      <Stack.Screen
          name="MeetOurTeams"
          options={{ headerShown: false }}
          component={MeetOurTeams}
        />      
      <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
        />   
      <Stack.Screen
          name="Download"
          options={{ headerShown: false }}
          component={Download}
        />  
      <Stack.Screen
          name="Report"
          options={{ headerShown: false }}
          component={Report}
        /> 
      <Stack.Screen
          name="PrivacyPolicy"
          options={{ headerShown: false }}
          component={PrivacyPolicy}
        />       
      <Stack.Screen
          name="OTP"
          options={{ headerShown: false }}
          component={VerifyOTP}
        />    
      <Stack.Screen
          name="News"
          options={{ headerShown: false }}
          component={News}
        />
      <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        /> 

        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

