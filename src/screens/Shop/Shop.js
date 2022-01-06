import React, { useEffect ,useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  FlatList
} from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/Header'
import { getApi } from '../../api/fakeApiUser'
import { base_url } from '../../utils/baseUrl'

const Shop = ({ navigation }) => {
  const [categories, setCategories] = useState([])
  const [openIndex,setOpenIndex] = useState(null)
  const [openIndexCategory,setOpenIndexSubCategory] = useState(null)

  const getCategories = async () => {
    const { data, status } = await getApi(`${base_url}/get-categories`, "")
    console.log(data);
    setCategories(data.result)
  }
  useEffect(() => {
      getCategories()
  }, [])
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View style={{ paddingLeft: 30 }} >
            <Image style={{ width: 160, height: 40 ,alignSelf:'center'}} source={require('../../assets/images/SayaanchLogo.png')} />
          </View>
          <FlatList 
data={categories}
renderItem={({item , index})=>{
  return(
    <View style={{flex:1}}>
<TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:10,borderBottomWidth:1,borderBottomColor:'gray'}} onPress={()=>{setOpenIndex(openIndex == index ? null : index)}}>
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
        </View>
      </SafeAreaView>
    </>
  )
}

export default Shop
