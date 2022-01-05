import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from 'react-redux';
import { getApi } from '../api/fakeApiUser';
import { getAppSettings } from '../stores/actions/settings.action';
import { base_url } from '../utils/baseUrl';
import Icon from 'react-native-vector-icons/Ionicons'

const CustomDrawer = ( props ) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAppSettings())
    }, [])

    const [cms, setCms] = useState([])
    const [Show, setShow] = useState(false)

    const list = [
        {
          title: "FAQ",
          onPress: () => { navigation.navigate("Faq") }
        },
        {
          title: "Contact Us",
          onPress: () => { navigation.navigate("Contact") }
        },
        {
          title: "Report",
          onPress: () => { navigation.navigate("Report") }
        }
      ]
    

      
    useEffect(() => {
      getCms()
    }, [])
  
    const getCms = async () => {
      const { data, status } = await getApi(`${base_url}/get-cms`, "")
      console.log("side drawer data==>",data);
      setCms(data.result)
    };
  

    return (
        <View style={[styles.container, { paddingTop: Platform.OS == "android" ? 10 : 40 }]}>
            <TouchableOpacity style={styles.editIcon}>
                <MaterialIcons name={"create"} size={22} />
            </TouchableOpacity>
            <Image
                style={{ width: 80, height: 20, alignSelf: "center" }}
                source={require('../assets/images/SayaanchLogo.png')}
                />
            <Image
                style={styles.avatar}
                source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg" }}
                />
            <Text style={styles.name}>Username</Text>
            <Text style={styles.number}>+91 000 00000</Text>
            <View style={styles.divider} />
            {/* <ScrollView>
                <View style={[styles.container]}>
                </View>
            </ScrollView> */}
            <ScrollView>
            <DrawerItemList {...props} />

                <View>
                    <TouchableOpacity style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={()=> setShow(!Show) } >
                        <Text>More Link</Text>
                        <Icon name="chevron-forward-outline" size={20} />
                    </TouchableOpacity>
                      <View style={{width: "80%", backgroundColor: "lightgray", height: 1, alignSelf: "center", marginTop: 10, marginTop: 0 }} />
                </View>            
           
           
           
            {Show==true ? <View>
                 {list.map((value) => {
                  return (
                    <View style={{}}>
                      <TouchableOpacity style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={value.onPress}>
                        <Text>{value.title}</Text>
                        <Icon name="chevron-forward-outline" size={20} style={{}} />
                      </TouchableOpacity>
                      <View style={[styles.divider, { marginTop: 0 }]} />
                    </View>
                  )
                })}

             { cms && cms.map((value) => {
                 console.log("value==>",value)
                 return (
                <View style={{}}>
                  <TouchableOpacity onPress={() => navigation.navigate("CmsView", { data: value })} style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <Text>{value.page_name}</Text>
                    <Icon name="chevron-forward-outline" size={20} style={{}} />
                  </TouchableOpacity>
                  <View style={[styles.divider, { marginTop: 0 }]} />
                </View>
              )
            })} 
            </View>
            
            : <></>}




        </ScrollView>


          </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    avatar: { width: 100, height: 100, alignSelf: "center", marginTop: 20, borderRadius: 350, borderColor: "#000", borderWidth: 0.5 },
    editIcon: {
        position: "absolute",
        top: Platform.OS == "android" ? 10 : 60,
        right: 10
    },
    name: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: "500",
        fontSize: 18
    },
    number: {
        textAlign: "center",
        marginTop: 5,
        fontSize: 12
    },
    divider: {
        width: "80%",
        backgroundColor: "lightgray",
        height: 1,
        alignSelf: "center",
        marginTop: 10
    }
})
