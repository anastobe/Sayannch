import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import BottomNavigation from './BottomNavigation';

// //screens
import Home from '../screens/Home/Home.screen'
import Account from '../screens/Account/Account'
import Shop from '../screens/Shop/Shop'
import Explore from '../screens/Explore/Explore'
import Login from '../screens/Auth/Login'
import CustomDrawer from './CustomDrawer';
import Awards from '../screens/Awards';
import MeetOurTeams from '../screens/MeetOurTeam'
import News from '../screens/News'
import Testimonials from '../screens/Testimonials';
import Download from '../screens/Download'
import VerifyOTP from '../screens/VerifyOTP'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import Report from '../screens/Report'
import Register from '../screens/Register'

const Drawer = createDrawerNavigator();

export default function NavigagatetoBottom() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#003C68",
        drawerActiveTintColor: "#fff"
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="BottomNavigation">
      <Drawer.Screen options={{ headerShown: false }} name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Awards" component={Awards} options={{ headerShown: false, }} />
      <Drawer.Screen name="Meet Our Teams" component={MeetOurTeams} options={{ headerShown: false }} />
      <Drawer.Screen name="News" component={News}  options={{ headerShown: false }} />
      <Drawer.Screen name="Testimonials" component={Testimonials} options={{ headerShown: false }} />
      <Drawer.Screen name="Download" component={Download} options={{ headerShown: false, }} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

























// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-vector-icons/Ionicons'

// // //screens
// import Home from '../screens/Home/Home.screen'
// import Account from '../screens/Account/Account'
// import Shop from '../screens/Shop/Shop'
// import Explore from '../screens/Explore/Explore'
// import Login from '../screens/Auth/Login'
// import News from '../screens/News'
// import VerifyOTP from '../screens/VerifyOTP'
// import PrivacyPolicy from '../screens/PrivacyPolicy'
// import Report from '../screens/Report'
// import Download from '../screens/Download'
// import Register from '../screens/Register'
// import MeetOurTeams from '../screens/MeetOurTeam'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (



//     <Tab.Navigator>
//       <Tab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused, color, size }) => {
//               return <Icon name={'ios-home'} size={25} color={color} />
//             }
//           }}
//         />
//       <Tab.Screen
//         name="Shop"
//         component={Shop}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//             <Tab.Screen
//         name="Explore"
//         component={Explore}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//     </Tab.Navigator>


//   );
// }

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator()



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Notifications">
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="Home" component={HomeScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }




















// import React from 'react';


// //screens
// import Home from '../screens/Home/Home.screen'
// import Account from '../screens/Account/Account'
// import Shop from '../screens/Shop/Shop'
// import Explore from '../screens/Explore/Explore'
// import Login from '../screens/Auth/Login'
// import News from '../screens/News'
// import VerifyOTP from '../screens/VerifyOTP'
// import PrivacyPolicy from '../screens/PrivacyPolicy'
// import Report from '../screens/Report'
// import Download from '../screens/Download'
// import Register from '../screens/Register'
// import MeetOurTeams from '../screens/MeetOurTeam'



// //functions
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import Icon from 'react-native-vector-icons/Ionicons'
// import Testimonials from '../screens/Testimonials'


// const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()




// export const MyTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused, color, size }) => {
//               return <Icon name={'ios-home'} size={25} color={color} />
//             }
//           }}
//         />
//       <Tab.Screen
//         name="Shop"
//         component={Shop}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//             <Tab.Screen
//         name="Explore"
//         component={Explore}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//     </Tab.Navigator>
//   )
// }







// const MainNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>


//         <Stack.Screen
//             name="MyTabs"
//             options={{ headerShown: false }}
//             component={MyTabs}
//           />



//       <Stack.Screen
//           name="Testimonials"
//           options={{ headerShown: false }}
//           component={Testimonials}
//         />      
//       <Stack.Screen
//           name="MeetOurTeams"
//           options={{ headerShown: false }}
//           component={MeetOurTeams}
//         />      
//       <Stack.Screen
//           name="Register"
//           options={{ headerShown: false }}
//           component={Register}
//         />   
//       <Stack.Screen
//           name="Download"
//           options={{ headerShown: false }}
//           component={Download}
//         />  
//       <Stack.Screen
//           name="Report"
//           options={{ headerShown: false }}
//           component={Report}
//         /> 
//       <Stack.Screen
//           name="PrivacyPolicy"
//           options={{ headerShown: false }}
//           component={PrivacyPolicy}
//         />       
//       <Stack.Screen
//           name="OTP"
//           options={{ headerShown: false }}
//           component={VerifyOTP}
//         />    
//       <Stack.Screen
//           name="News"
//           options={{ headerShown: false }}
//           component={News}
//         />
//       <Stack.Screen
//           name="Login"
//           options={{ headerShown: false }}
//           component={Login}
//         /> 

//         {/* add your another screen here using -> Stack.Screen */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default MainNavigation

