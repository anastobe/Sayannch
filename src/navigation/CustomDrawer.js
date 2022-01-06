import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { connect, useDispatch ,useSelector} from 'react-redux';
import { getApi } from '../api/fakeApiUser';
import { getAppSettings } from '../stores/actions/settings.action';
import { base_url } from '../utils/baseUrl';
import Icon from 'react-native-vector-icons/Ionicons'
import { BtnColor } from '../Colors/Color';

const CustomDrawer = ( {navigation,...props} ) => {
  const [categories, setCategories] = useState([])
const [openIndex,setOpenIndex] = useState(null)
const [openIndexCategory,setOpenIndexSubCategory] = useState(null)
const [openIndexChildCategory,setOpenIndexChildCategory] = useState(null)



    const dispatch = useDispatch()
    // const {authReducer, } = useSelector((state)=>state
    
    // )
    const getCategories = async () => {
      const { data, status } = await getApi(`${base_url}/get-categories`, "")
      console.log(data);
      setCategories(data.result)
    }
    useEffect(() => {
        dispatch(getAppSettings())
        getCategories()
    }, [])
    useEffect(()=>{
      console.log('redux_Props====>>>',props.data)
      console.log("getCategories===>>>",categories)

    })

    const [cms, setCms] = useState([])
    // const [Show, setShow] = useState(false)

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
            {/* <TouchableOpacity style={styles.editIcon}>
                <MaterialIcons name={"create"} size={22} />
            </TouchableOpacity> */}
            <Image
                style={{ width: 80, height: 20, alignSelf: "center" }}
                source={require('../assets/images/SayaanchLogo.png')}
                />
          {props.data ?  <Image
                style={styles.avatar}
                source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg" }}
                />:
                <View style={{alignItems:'center',justifyContent:'center'}}>
                  <View style={{marginTop:20,paddingHorizontal:10,width:'95%',paddingVertical:8,marginHorizontal:5,borderRadius:5,backgroundColor:BtnColor}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                      <Text style={{color:'#fff',textAlign:'center',fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                    </View>
 

                    <View style={{marginTop:20,paddingHorizontal:10,width:'95%',paddingVertical:8,marginHorizontal:5,borderRadius:5,backgroundColor:BtnColor}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                      <Text style={{color:'#fff',textAlign:'center',fontSize:18}}>Signup</Text>
                    </TouchableOpacity>
                    </View>
                  
                  </View>
                }
                { props.data?
<View>

            <Text style={styles.name}>Username</Text>
            <Text style={styles.number}>+91 000 00000</Text>
            <View style={styles.divider} />
            <FlatList 
data={categories}
renderItem={({item , index})=>{
  return(
    <View style={{flex:1}}>
<TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,paddingVertical:10,borderBottomWidth:1,borderBottomColor:'gray'}} onPress={()=>{setOpenIndex(openIndex == index ? null : index)}}>
  <View>
    <Image resizeMode='contain' style={{height:30,width:30,borderRadius:100}} source={{uri:item.image}} />
  </View>
  <View style={{flexGrow:1}}>

<Text style={{marginLeft:10}}>{item.category_name}</Text>

  </View>
  {
    openIndex == index ?
    <Icon name="chevron-down-outline" size={25} style={{}} />:
    <Icon name="chevron-forward-outline" size={25} style={{}} />
  }

</TouchableOpacity>
{
  openIndex == index && item.subcategory.length > 0 ?

<View style={{paddingVertical:5,marginHorizontal:10,borderRadius:15}}>
<FlatList 
data = {item.subcategory}
renderItem={({item , index}) => {
  return(
    <View>
      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginVertical:10,paddingHorizontal:10}} onPress={()=>{setOpenIndexSubCategory(openIndexCategory == index?null:index)}}>
  <View>
    <Image resizeMode='contain' style={{height:30,width:30,borderRadius:100}} source={{uri:item.image}} />
  </View>
  <View style={{flexGrow:1}}>

<Text style={{marginLeft:10}}>{item.category_name}</Text>

  </View>
  
     <View style={{marginRight:5}}>
   {

       openIndexCategory == index?
           <Icon name="chevron-down-outline" size={18} style={{}} />:
           <Icon name="chevron-forward-outline" size={18} style={{}} />
          }
     </View>
  
</TouchableOpacity>
{openIndexCategory == index && item.childCategory.length > 0 ?
      <View style={{paddingHorizontal:10,borderWidth:1,borderColor:'gray',marginHorizontal:10,borderRadius:10}}>

<FlatList
data={item.childCategory}
renderItem={({item , index})=>{
  return(
    <View style={{flex:1}}>
       <TouchableOpacity onPress={() => {navigation.navigate('Product')}} style={{flexDirection:'row',alignItems:'center',marginVertical:10,paddingHorizontal:10}} >
  <View>
    <Image resizeMode='contain' style={{height:30,width:30,borderRadius:100}} source={{uri:item.image}} />
  </View>
  <View style={{flexGrow:1}}>

<Text style={{marginLeft:10}}>{item.category_name}</Text>

  </View>
  
     <View style={{marginRight:5}}>
   {/* {

       openIndexCategory == index?
           <Icon name="chevron-down-outline" size={20} style={{}} />:
           <Icon name="chevron-forward-outline" size={20} style={{}} />
          } */}
     </View>
  
</TouchableOpacity>
      </View>
  )
}}
/>
      </View>

:
null}
      </View>
  )
}}
/>
  </View>
:null
}

    </View>
  )
}}

/>
            </View>:null
                }
            {/* <ScrollView>
                <View style={[styles.container]}>
                </View>
            </ScrollView> */}
            {/* <DrawerItemList {...props} /> */}

                {/* <View>
                    <TouchableOpacity style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={()=> setShow(!Show) } >
                        <Text>More Link</Text>
                        <Icon name="chevron-forward-outline" size={20} />
                    </TouchableOpacity>
                      <View style={{width: "80%", backgroundColor: "lightgray", height: 1, alignSelf: "center", marginTop: 10, marginTop: 0 }} />
                </View>             */}
           
           
           
            {/* {Show==true ? <View>
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
            
            : <></>} */}






          </View>

    )
}

const mapStateToProps = state => {
  return {
    // user: state.userReducer.costCalcultorData,
    data: state.authReducer.users

  }

}
const mapDispatchToProps = {

  // LoginSaved
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
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
