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

const Report = () => {

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
        <View style={{ paddingBottom: 30 }} >
          <Text>What does Lorem Ipsum actually say?Lorem ipsum is a name for a 
          common type of placeholder text. Also known as filler or dummy text, 
          this is simply copy that serves to fill a space without actually saying 
          anything meaningful. It's essentially nonsense text, but gives an idea 
          of what real words will look like in the final productasdasdasd asdasd
          this is simply copy that serves to fill a space without actually saying 
          anything meaningful. It's essentially nonsense text, but gives an idea 
          of what real words will look like in the final productasdasdasd asdasd
          
          .</Text>
        </View>
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
            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, marginTop: 60, marginBottom: 30 }} > Report Us </Text>
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


export default Report
