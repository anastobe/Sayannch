import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet
} from 'react-native'
import { InputColorTxt } from '../../Colors/Color'

//icons
import Icon from 'react-native-vector-icons/Ionicons'

const Account = ({ navigation }) => {



  

  const ProfileUpper=()=> {
    return(
      
    <View style={styles.CardContainer}>

        <View style={styles.ImgContainer} >
          <Image source={ require("../../assets/images/SayaanchLogo.png") } /> 
        </View>

  </View>
  
  )
  }


  
  const ProfileCards=()=> {
    return(
      
      <View style={styles.iconsContainer} >
     
        <TouchableOpacity onPress={ ()=> navigation.navigate("Report") } >
     <View  style={styles.icons} >
     <Icon name={'help-outline'} size={30} color={InputColorTxt} />
      <Text style={styles.iconsTxt} >FAQ</Text>
     </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ ()=> navigation.navigate("Contact")} >
     <View  style={styles.icons} >
     <Icon name={'call-outline'} size={30} color={InputColorTxt} />
      <Text style={styles.iconsTxt} >CONTACT</Text>
     </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={ ()=> navigation.navigate("Report") }>
     <View  style={styles.icons} >
     <Icon name={'checkmark-done-outline'} size={30} color={InputColorTxt} />
      <Text style={styles.iconsTxt} >REPORT</Text>
     </View>
        </TouchableOpacity>

        <TouchableOpacity   onPress={ ()=> navigation.navigate("PrivacyPolicy") }>
     <View  style={styles.icons} >
     <Icon name={'construct-outline'} size={30} color={InputColorTxt} />
      <Text style={styles.iconsTxt} >POLICY</Text>
     </View>
        </TouchableOpacity>


   </View>
  
  )
  }


  return (
    <>
      {/* <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}> */}

          <ProfileUpper />
          <ProfileCards />


        
        
        {/* </View> */}
    {/* //   </SafeAreaView> */}
    </>
  )
}



const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },

  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },




   //Upper
   CardContainer:{
    alignItems: 'center',
    backgroundColor: "#b1c71c",
    justifyContent: 'center',
    height: 200,
  },
  ImgContainer:{
    marginTop: 30,
    borderRadius: 50,
    textAlign: 'center',
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center'
  },



  
  //cards
  iconsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflow: 'hidden',
    paddingBottom: 20,
    
  },
  icons:{
    width: 150,
    height: 100,
    justifyContent: 'center',
    backgroundColor: "#f4f4f4",
    marginTop: 8,
    textAlign: "center",
    alignItems: "center",
  },
  iconsTxt:{
    marginTop: 16,
    fontSize: 12,
    fontWeight: 'bold',  
  },






})




export default Account
