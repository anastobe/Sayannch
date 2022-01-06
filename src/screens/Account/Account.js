import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'
import { BtnColor, Dark_Bule_Color, InputColorTxt, Orange_Color, White_Color } from '../../Colors/Color'
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { getApi } from '../../api/fakeApiUser'
import { base_url } from '../../utils/baseUrl'
import { connect ,useDispatch } from 'react-redux'
import { getAppSettings } from '../../stores/actions/settings.action';
import {logOut} from '../../stores/actions/authAction'

const Account = ({navigation,...props }) => {
  const [openIndex , setOpenIndex] = useState (null)
  // const [cms, setCms] = useState([])
  const [Show, setShow] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getAppSettings())
  }, [])
useEffect(()=>{
console.log("REDUX_PROPS",props.data)
setOpenIndex(null)
},[])




useEffect(() => {
  getCms()
}, [])

const getCms = async () => {
  const { data, status } = await getApi(`${base_url}/get-cms`, "")
  console.log("side drawer data==>",data);
  setCms(data.result)
};
  const list = [
    {
      title: "Manage Adresses",
      onPress: () => { navigation.navigate("Faq") },
      iconName:'location'

    },
    {
      title: "order History",
      onPress: () => { navigation.navigate("Contact") },
      iconName:'wallet'

    },
    {
      title: "My WishList",
      onPress: () => { navigation.navigate("Report") },
      iconName:'heart'

    },
    {
      title: "My Reviewes",
      onPress: () => { navigation.navigate("Report") },
      iconName:'eye'

    },
    {
      title: "My Wallet",
      onPress: () => { navigation.navigate("Report") },
      iconName:'wallet'

    },
    {
      title: "Gift Cards",
      onPress: () => { navigation.navigate("Report") },
      iconName:'gift'

    },
    {
      title: "Refear & Earns",
      onPress: () => { navigation.navigate("Report") },
      iconName:'card'

    },
    {
      title: "Bank Details",
      onPress: () => { navigation.navigate("Report") },
      iconName:'business'

    },
    {
      title: "Settings",
      onPress: () => { navigation.navigate("Report") },
      iconName:'settings'

    },
    {
      title: "Support",
      onPress: () => { navigation.navigate("Report") },
      iconName:'chatbox-ellipses'

    },
    {
      title: "Faqs",
      onPress: () => { navigation.navigate("Report") },
      iconName:'chatbox'

    },
    {
      title: "Log Out",
      onPress: () => { logOut() },
      iconName:'log-out'

    }
  ]
  const list2 = [
    {
      title: "FAQ",
      onPress: () => { navigation.navigate("Faq") }
    },
    
    {
      title: "Awards",
      onPress: () => { navigation.navigate("Awards") }
    },
    {
      title: "News",
      onPress: () => { navigation.navigate("News") }
    },
    
    {
      title: "Meet Our Teams",
      onPress: () => { navigation.navigate("MeetOurTeams") }
    },
    
    
    {
      title: "Testimonials",
      onPress: () => { navigation.navigate("Testimonials") }
    },
    {
      title: "Videos",
      onPress: () => { navigation.navigate("Testimonials") }
    },
    {
      title: "Downloads",
      onPress: () => { navigation.navigate("Download") }
    },
    {
      title: "Privacy Policy",
      onPress: () => { navigation.navigate("PrivacyPolicy") }
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
  const [cms, setCms] = useState([])

  useEffect(() => {
    getc()
  }, [])

  const getc = async () => {
    const { data, status } = await getApi(`${base_url}/get-cms`, "")
    console.log(data);
    setCms(data.result)
  };

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.outerWrapper}>
            {/* <ProfileUpper />
          <ProfileCards /> */}
          <Image
                style={{ width: 150, height: 40, alignSelf: "center",marginVertical:20 }}
                // source={require('../assets/images/SayaanchLogo.png')}
                source={require('../../assets/images/SayaanchLogo.png')}
                />
                
           {props.data? <View style={{}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.avatar}
                  source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg" }}
                />
                <View style={{ marginStart: 10 }}>
                  <Text style={styles.name}>Username</Text>
                  <Text style={styles.number}>+91 000 00000</Text>
                </View>

                {/* <Icon name="chevron-forward-outline" size={25} style={{ position: "absolute", right: 20 }} /> */}
              </View>

              <FlatList
                      data={list}
                      renderItem={({item , index})=>{
                        return(
<View style={{backgroundColor:openIndex == index ? BtnColor:'white',paddingHorizontal:20,paddingTop:15,paddingBottom:15,borderColor:openIndex == index ? BtnColor:'gray',borderWidth:1,marginHorizontal:10,marginVertical:10,borderRadius:5}}>
<TouchableOpacity onPress={() => {setOpenIndex(index)}} style={{flexDirection:'row'}} >
 <Icon name={item.iconName} color={ openIndex == index ? 'white' :'black'} size={25} /> 
<View style={{flexGrow:1}}>
  <Text style={{fontSize:16,marginLeft:10,color: openIndex == index ? 'white' :'black'}}>{item.title}</Text>
  </View>

  </TouchableOpacity>
  </View>
                        )
                      }}
                      />
                      <View style={{backgroundColor:'#212121',paddingVertical:20}}>

                      {/* <FlatList
                      data={cms}
                      renderItem={({item,index})=>{
                        return(
<View style={{flex:1}}>
  <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:15}}>

<Text style={{color:'#fff'}}>{item.title}</Text>
  </TouchableOpacity>
  </View>
                        )
                      }}
                      /> */}
                      {list2.map((value) => {
                  return (
                    <View style={{flex:1}}>
  <TouchableOpacity onPress={()=>{value.onPress()}} style={{paddingVertical:10,paddingHorizontal:15}}>

<Text style={{color:'#fff'}}>{value.title}</Text>
  </TouchableOpacity>
  </View>
                  )
                })}
            {/* <DrawerItemList {...props} /> */}

                          <View>
                    <TouchableOpacity style={{ paddingVertical:10,paddingHorizontal:17, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={()=> setShow(!Show) } >
                        <Text style={{color:'#fff'}}>More Link</Text>
                        {
Show?
                        <Icon name="chevron-down-outline" size={28} color={'white'}/>:
                        <Icon name="chevron-forward-outline" size={28} color={'white'} /> 
                        }
                    </TouchableOpacity>
                      {/* <View style={{width: "80%", backgroundColor: "lightgray", height: 1, alignSelf: "center", marginTop: 10, marginTop: 0 }} /> */}
                </View>            
           
           
           
            {Show ? <View style={{borderWidth:1,borderColor:'white',paddingVertical:10,borderRadius:10,marginHorizontal:15}}>
                 

             { cms && cms.map((value) => {
                 console.log("value==>",value)
                 return (
                <View >
                  <TouchableOpacity onPress={() => navigation.navigate("CmsView", { data: value })} style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <Text style={{color:'#fff'}}>{value.page_name}</Text>
                    {/* <Icon name="chevron-forward-outline" size={20} style={{}} /> */}
                  </TouchableOpacity>
                  {/* <View style={[styles.divider, { marginTop: 0 }]} /> */}
                </View>
              )
            })} 
            </View>
            
            : null}
                      
                      </View>

            </View>:<View style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center',fontSize:15,marginHorizontal:30}}>Already have an account so please login to your account otherwise Register first</Text>
                  <View style={{marginTop:20,paddingHorizontal:10,width:'95%',paddingVertical:10,marginHorizontal:5,borderRadius:5,backgroundColor:BtnColor}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                      <Text style={{color:'#fff',textAlign:'center',fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                    </View>
 

                    <View style={{marginTop:20,paddingHorizontal:10,width:'95%',paddingVertical:10,marginHorizontal:5,borderRadius:5,backgroundColor:BtnColor}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                      <Text style={{color:'#fff',textAlign:'center',fontSize:18}}>Signup</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                  
                      </View>
                  
                  </View>}
            {/* <View style={styles.divider} /> */}

           
            {/* <View style={{}}>
                  <TouchableOpacity style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={()=> navigation.navigate("Login") } >
                    <Text>Login</Text>
                    <Icon name="chevron-forward-outline" size={25} style={{}} />
                  </TouchableOpacity>
                  <View style={[styles.divider, { marginTop: 0 }]} />
            </View>

             
            <View style={{}}>
                  <TouchableOpacity style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}   onPress={()=> navigation.navigate("Register") }>                                       
                    <Text>Signup</Text>
                    <Icon name="chevron-forward-outline" size={25} style={{}} />
                  </TouchableOpacity>
                  <View style={[styles.divider, { marginTop: 0 }]} />
            </View> */}

            {/* {list.map((value) => {
              return (
                <View style={{}}>
                  <TouchableOpacity style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={value.onPress}>
                    <Text>{value.title}</Text>
                    <Icon name="chevron-forward-outline" size={25} style={{}} />
                  </TouchableOpacity>
                  <View style={[styles.divider, { marginTop: 0 }]} />
                </View>
              )
            })}

            {cms.map((value) => {
              return (
                <View style={{}}>
                  <TouchableOpacity onPress={() => navigation.navigate("CmsView", { data: value })} style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <Text>{value.page_name}</Text>
                    <Icon name="chevron-forward-outline" size={25} style={{}} />
                  </TouchableOpacity>
                  <View style={[styles.divider, { marginTop: 0 }]} />
                </View>
              )
            })} */}

          </View>
        </ScrollView>
      </SafeAreaView>
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
    // alignItems: 'center',
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
  CardContainer: {
    alignItems: 'center',
    backgroundColor: "#fff",
    justifyContent: 'center',
    height: 200,
  },
  ImgContainer: {
    marginTop: 30,
    borderRadius: 50,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },




  //cards
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflow: 'hidden',
    paddingBottom: 20,

  },
  icons: {
    width: 150,
    height: '50%',
    justifyContent: 'center',
    backgroundColor: Orange_Color,
    marginTop: 8,
    textAlign: "center",
    alignItems: "center",
  },
  iconsTxt: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: 'bold',
    color: Dark_Bule_Color,

  },




  avatar: { width: 70, height: 70, marginTop: 20, borderRadius: 350, borderColor: "#000", borderWidth: 0.5, marginStart: 10 },
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
    width: "100%",
    backgroundColor: "lightgray",
    height: 1,
    alignSelf: "center",
    marginTop: 10
  }
})




const mapStateToProps = state => {
  return {
    // user: state.userReducer.costCalcultorData,
    data: state.authReducer.users

  }

}
const mapDispatchToProps = {

  // LoginSaved
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
