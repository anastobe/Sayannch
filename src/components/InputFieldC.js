import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  InputField
} from 'react-native'
import { TextInput, } from 'react-native-gesture-handler'

//color
import { grey,PlaceHolderColor } from '../Colors/Color'

// v9 block t nort nazmabad 

const InputFieldC = ({

  TextChange = () => {},
  value = "",
  ...props


}) => {  
  
  // console.log("params===>",props.names)
  
  
  return (
    <>


        <View >
            <TextInput placeholder={props.names==='Email' ? "  Enter Email" : 

            //contact
             props.names==='Enter Email' ? "Enter your email" : 
             props.names==='Enter Phone' ? "Enter Phone Number" : 
             props.names==='Message' ? "Message" : 

             props.names==='Otp' ? "  Enter Otp" : 

             //contact page also
             props.names==='fname' ? "  First Name" : 
             props.names==='lname' ? "  Last Name" : 
             
             props.names==='contact' ? "  Contact Number" : 
             props.names==='BrandNames' ? "  Name of Brand /MT/ Protected Element" : 
             props.names==='AdditionalRemarks' ? "  Additional Remarks" : 
             props.names==='url' ? "  Product URL [Optional]" : 
             props.names==='NameR' ? "  Enter Name" : 
             props.names==='MobileR' ? "  Mobile Number" : 
             props.names==='EmailR' ? "  E-Mail" : 
             props.names==='PassR' ? "  *********" : 

            "Null" 
             }   onChangeText={TextChange} placeholderColor={PlaceHolderColor} style={{ borderWidth: 1, borderColor: '#eaeaea', backgroundColor: '#f3f4f6', width: '100%', borderRadius: 10, marginTop: 20, marginBottom: 30, height: 55 }} />
        </View>
   
    </>
  )
}

export default InputFieldC
