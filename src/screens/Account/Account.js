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
  ScrollView
} from 'react-native'
import { Dark_Bule_Color, InputColorTxt, Orange_Color, White_Color } from '../../Colors/Color'

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { getApi } from '../../api/fakeApiUser'
import { base_url } from '../../utils/baseUrl'

const Account = ({ navigation }) => {

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

  const [cms, setCms] = useState([])

  useEffect(() => {
    getCms()
  }, [])

  const getCms = async () => {
    const { data, status } = await getApi(`${base_url}/get-cms`, "")
    console.log(data);
    setCms(data.result)
  };

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View style={styles.outerWrapper}>
            {/* <ProfileUpper />
          <ProfileCards /> */}
            <View style={{}}>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.avatar}
                  source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg" }}
                />
                <View style={{ marginStart: 10 }}>
                  <Text style={styles.name}>Username</Text>
                  <Text style={styles.number}>+91 000 00000</Text>
                </View>

                <Icon name="chevron-forward-outline" size={25} style={{ position: "absolute", right: 20 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />

            {list.map((value) => {
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
            })}

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




export default Account
