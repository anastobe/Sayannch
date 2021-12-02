import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    Image,
    Button
  } from 'react-native'

  //styles
  import styles from "./style"

  //color
  import {grey, InputColor} from "../Colors/Color"

  //component
import InputFieldC from "../components/InputFieldC"
import ButtonC from "../components/ButtonC"

   //scroll
import { ScrollView } from "react-native-gesture-handler"

const Contact = () => {

   const [Fname, setFname] = useState("")
   const [Lname, setLname] = useState("")
   const [Cname, setCname] = useState("")
   const [Bname, setBname] = useState("")
   const [Remarks, setRemarks] = useState("")
   const [Url, setUrl] = useState("")

    const styleUpper = { fontWeight: "bold", marginTop: 30, marginBottom: 20 }

    const array1 = [
    <View>
        <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Fname} TextChange={setFname} names="fname" />          
        </View>      
    </View>,
        <View>
        <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Lname} TextChange={setLname} names="lname" />         
        </View>      
    </View>,
        <View>
        <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Cname} TextChange={setCname} names="contact" />         
        </View>      
    </View>,
        <View>
        <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Bname} TextChange={setBname} names="BrandNames" />     
        </View>      
    </View>,
        <View>
        <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Remarks} TextChange={setRemarks} names="AdditionalRemarks" />    
        </View>      
    </View>,
        <View>
        <View style={{ marginBottom: -30 }} >
        <InputFieldC value={Url} TextChange={setUrl} names="url" />    
        </View>      
    </View>,
      ]

      //array2 styling
      // heading 
      array2Heading = { fontWeight: "bold", fontSize: 22,   }
      array2Txt = { fontSize: 15, color: grey  }


      const array2 = [
        <View>
          <Text style={array2Heading} >Adress</Text>
          <Text style={array2Txt} >25 FLOOR AMERICA PRESIDENT HOUSE OPPOSITE</Text>    
        </View>
        ,
        <View>
          <Text style={array2Heading} >General Assistance</Text>
          <Text style={array2Txt} >info@sayaanch.com</Text>    
        </View>
        ,
        <View>
          <Text style={array2Heading} >Merchantdizing Team</Text>
          <Text style={array2Txt} >sales1@sayaanch.com</Text>     
        </View>
      ,
        <View>
          <Text style={array2Heading} >Mobile No</Text>
          <Text style={array2Txt} >+91 09855995699 </Text><Text style={array2Txt} >+91 7814358405 </Text><Text style={array2Txt} >+91 6280992038</Text>     
        </View>
      ,
  ]

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView2}>
            <ScrollView>
          <View style={styles.outerWrapper}>

          <View style={{  height: 40, marginTop: 50 }} >
          <Image  source={require('../assets/images/SayaanchLogo.png')} />
          </View>

          <View>
            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, marginTop: 60, marginBottom: 30 }} > Contact Us </Text>
          </View> 

          <View style={{ width: '90%'  }} >
          {array1.map((v,i)=>{
         return(
           <View key={i}>
             {v}
           </View>
         )
       })}

          {/* button */}
          <ButtonC names="Submit" />


          </View>



          <View style={{ width: '90%'  }} >
          {array2.map((v,i)=>{
         return(
           <View style={{ marginTop: 30 }} key={i}>
             {v}
           </View>
         )
         })}
          </View>








          </View>
          </ScrollView>
        </SafeAreaView>
        </>
    )
}


export default Contact
