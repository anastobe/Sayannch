import React, { useEffect, useState } from 'react';

//screens
import Home from './screens/Home/Home.screen'
import Account from './screens/Account/Account'
import Shop from './screens/Shop/Shop'
import Explore from './screens/Explore/Explore'
import Login from './screens/Auth/Login'
import News from './screens/News'
import VerifyOTP from './screens/VerifyOTP'
import PrivacyPolicy from './screens/PrivacyPolicy'
import Report from './screens/Report'
import Download from './screens/Download'
import Register from './screens/Register'
import MeetOurTeams from './screens/MeetOurTeam'
import Contact from "./screens/Contact"
import Faq from './screens/Faq';


//functions
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'
import Testimonials from './screens/Testimonials'


//navigation
import Darawer from "./navigation/navigation"
//loader
import Loader from "./screens/Loader/Loader"

const Stack = createStackNavigator()






const App = () => {

  return (

    


    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        
        <Stack.Screen
            name="Darawer"
            options={{ headerShown: false }}
            component={ Darawer }
          />
        <Stack.Screen
            name="Faq"
            options={{ headerShown: false }}
            component={ Faq }
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

export default App
























































// import React, { useEffect, useState } from 'react'
// import 'react-native-gesture-handler'
// import MainNavigation from './navigation/navigation'
// import { Provider } from 'react-redux'
// import { store } from './stores'
// import Loader from './screens/Loader/Loader'

// const App = () => {

//   const [Load, setLoad] = useState(true)


//   useEffect(() => {
    
//     setTimeout(() => {
        
//         setLoad(false)
  
//     }, 1000);
//   }, [])
     

//   return (
//     <>
    

//     {Load ? <Loader /> :
        
//         <Provider store={store}>
//            <MainNavigation />
//         </Provider>
//         }
//     </>
//   )
// }

// export default App
