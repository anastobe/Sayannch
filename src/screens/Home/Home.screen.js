import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'

const { width: screenWidth } = Dimensions.get("screen")

import styles from './Home.style'

//header Component
import Header from '../../components/Header'
import FlatListSlider from "../../components/Slider";
import ProductCard from '../../components/ProductCard'
import { getApi } from '../../api/fakeApiUser'
import { base_url } from '../../utils/baseUrl'


const Home = ({
  navigation
}) => {
  let images = [
    {
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
  ]

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const { data, status } = await getApi(`${base_url}/get-categories`, "")
    console.log(data);
    setCategories(data.result)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Header
            menuIconPress={() => navigation.toggleDrawer()}
          />
          <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
            <View style={{ flex: 1 }}>
              <FlatList
                horizontal
                data={categories}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={{ margin: 10, alignItems: "center", }}>
                      <Image source={{ uri: item.image }} style={{ height: 80, width: 80, borderRadius: 360, borderWidth: 5, borderColor: "#CACBCD" }} />
                      <Text>{item.category_name}</Text>
                    </TouchableOpacity>
                  )
                }}
              />
              <View style={{}}>
                <FlatListSlider
                  data={images}
                  timer={2000}
                  imageKey={'image'}
                  local={false}
                  width={screenWidth}
                  separator={0}
                  loop={true}
                  autoscroll={true}
                  // currentIndexCallback={index => console.log('Index', index)}
                  onPress={item => console.log(JSON.stringify(item))}
                  indicator
                  animation
                />
              </View>

              <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 15, marginStart: 10 }}>SPOTLIGHT PRODUCTS</Text>
              <View style={{ width: 40, height: 2, backgroundColor: "#FD4900", marginStart: 15, marginTop: 5 }} />
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20 }}>
                <ProductCard />
                <ProductCard />
              </View>


              <View>
                <Image source={{ uri: "https://i2.wp.com/img.paisawapas.com/ovz3vew9pw/2021/10/25182231/Designer-Womens.png?ssl=1" }} resizeMode="contain" style={{ height: 130, marginTop: 20 }} />
              </View>


              <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 15, marginStart: 10 }}>NEW ARRIVALS</Text>
              <View style={{ width: 40, height: 2, backgroundColor: "#FD4900", marginStart: 15, marginTop: 5 }} />
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20, flexWrap: "wrap" }}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </View>


              <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 15, marginStart: 10 }}>BEST SELLER</Text>
              <View style={{ width: 40, height: 2, backgroundColor: "#FD4900", marginStart: 15, marginTop: 5 }} />
              <TouchableOpacity style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                marginTop: 20,
                width: "100%"
              }}>
                <Image source={{ uri: "https://dealsdunia.in/static/assets/blog/beauty1.png" }} style={{ height: 140 }} resizeMode="contain" />

                <View style={{ width: "90%", alignSelf: "center", backgroundColor: "#fff", padding: 10, flexDirection: "row", alignItems: "center", }}>
                  <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hgv6BAUEoBF3XZylhJ1t1VBPkd9AZch-Ow&usqp=CAU" }} style={{ height: 40, width: 100 }} />
                  <Text style={{ position: "absolute", right: 30, fontWeight: "500" }}>Shop Now {" "} </Text>
                </View>
              </TouchableOpacity>


              <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 15, marginStart: 10 }}>BRAND YOU LOVE</Text>
              <View style={{ width: 40, height: 2, backgroundColor: "#FD4900", marginStart: 15, marginTop: 5 }} />
              <Image source={{ uri: "https://qph.fs.quoracdn.net/main-qimg-025793933ff6294a6ef0f836d28151ea" }} style={{ height: 190, marginTop: 20 }} resizeMode="contain" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
