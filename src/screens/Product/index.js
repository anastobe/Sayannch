import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

const Product = ({naviagtion}) => {
    const [openIndex,setOpenIndex] = useState (null)
    const list =[
        {
            image:require('../../assets/images/jhoomka.png'),
            title:'Sayaansh',
            description:'Blue Handpainted Jhumki',
            price:'Rs.419.00',
            descount:'30% Off',
        },
        {
            image:require('../../assets/images/joomka1.png'),
            title:'Sayaansh',
            description:'Green Handpainted Jhumki',
            price:'Rs.419.00',
            descount:'40% Off'

        },
        {
            image:require('../../assets/images/jhoomka2.png'),
            title:'Sayaansh',
            description:'Gray Jhumki Earrings',
            price:'Rs.419.00',
            descount:'39% Off'
        },
        {
            image:require('../../assets/images/jhoomka3.png'),
            title:'Sayaansh',
            description:'Orange Handpainted Jhumki',
            price:'Rs.419.00',
            descount:'20% Off'

        }
    ]
    const renderProduct = () =>{
        return(
            <View style={{flex:1}}>
<FlatList
data={list}
numColumns={2}
renderItem={({item , index})=>{
    return(
<View style={{flex:1,justifyContent:'center',alignItems:'center',marginVertical:15,}}>
    <View style={{borderWidth:1,borderColor:'gray',width:'90%',backgroundColor:'#E0E0E0',height:257}}>
        <View style={{height:25,width:50,backgroundColor:'orange',marginTop:-10,left:-1,borderRadius:4,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:11,fontWeight:'600'}}>{item.descount}</Text>
            </View>
            <View style={{alignSelf:'flex-end'}}>
                <TouchableOpacity onPress={()=>{setOpenIndex(openIndex == index ? null :index)}}>
{
    openIndex == index ?
<Icon name={'heart'} size={25} color={'red'} />:
<Icon name={'heart-outline'} size={25} color={'red'}/>
}

                </TouchableOpacity>
                </View>
<View style={{paddingTop:10}}>
        <Image style={{width:'100%',height:130}} resizeMode='cover' source={item.image} />
    </View>
        <View style={{paddingVertical:10,backgroundColor:'#F5F5F5',width:'100%',paddingLeft:10}}>
            <Text style={{fontWeight:'bold'}}>{item.title}</Text>
            <Text style={{fontSize:10}}>{item.description}</Text>
            <Text style={{fontWeight:'bold'}}>{item.price}</Text>

            </View>
        </View>
    </View>
    )
}}
/>
            </View>
        )
    }
    return (
        <View style={{flex:1}} >
           {renderProduct()}
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})
