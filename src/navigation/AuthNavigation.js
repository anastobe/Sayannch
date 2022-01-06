
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigation from './BottomNavigation'

import Login from '../screens/Auth/Login'
import News from '../screens/News'
import VerifyOTP from '../screens/VerifyOTP'
import PrivacyPolicy from '../screens/VerifyOTP'
import Report from '../screens/Report'
import Download from '../screens/Download'
import Register from '../screens/Register'
import MeetOurTeams from '../screens/MeetOurTeam'
import Contact from "../screens/Contact"
import Testimonials from "../screens/Testimonials"
import CmsView from "../screens/CmsView"


import Faq from '../screens/Faq';
import CustomDrawer from './CustomDrawer';
import NavigagatetoBottom from './navigation';

const Stack = createStackNavigator()



const AuthStack = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login}
            />
            <Stack.Screen
                name="MyTabs"
                options={{ headerShown: false }}
                component={NavigagatetoBottom}
            />
            <Stack.Screen
                name="Register"
                options={{ headerShown: false }}
                component={Register}
            />
            <Stack.Screen
                name="VerifyOTP"
                options={{ headerShown: false }}
                component={VerifyOTP}
            />
            {/* <Stack.Screen
              name="Darawer"
              options={{ headerShown: false }}
              component={CustomDrawer}
            /> */}
            <Stack.Screen
                name="Faq"
                options={{ headerShown: false }}
                component={Faq}
            />

            <Stack.Screen
                name="Contact"
                options={{ headerShown: false }}
                component={Contact}
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
                name="CmsView"
                options={{ headerShown: false }}
                component={CmsView}
            />
            <Stack.Screen
                name="PrivacyPolicy"
                options={{ headerShown: false }}
                component={PrivacyPolicy}
            />
            <Stack.Screen
                name="News"
                options={{ headerShown: false }}
                component={News}
            />


            {/* add your another screen here using -> Stack.Screen */}
        </Stack.Navigator>
    )
}
export default AuthStack