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
import HTMLView from 'react-native-htmlview'
import { useDispatch, useSelector } from 'react-redux'
import { getApi } from '../api/fakeApiUser'
import { grey } from '../Colors/Color'
import { getAppSettings } from '../stores/actions/settings.action'
import { base_url } from '../utils/baseUrl'
//styles
import styles from './style'

const Faq = () => {
  const appSettings = useSelector(state => state.appSettings)
  const [faqs, setfaqs] = useState([])
  const [qa, setQa] = useState([])
  const [selectedCat, setSelectedCat] = useState(0)
  const [openQuestion, setOpenQuestion] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAppSettings())
  }, [])

  useEffect(() => {
    getFaqs()
  }, [])

  const getFaqs = async () => {
    const { data, status } = await getApi(`${base_url}/user-FAQs`, "")
    console.log(data);
    setfaqs(data.result)
    setQa(data.result[0].faqs)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View style={styles.outerWrapper}>
            <View style={{}} >
              <Image source={{ uri: appSettings.settings.website_logo }} resizeMode="contain" style={{ width: 200, height: 100 }} />
            </View>

            <View>
              <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, }} > FAQ'S </Text>
            </View>

            <FlatList
              data={faqs}
              horizontal
              style={{ width: "100%" }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => {
                    setSelectedCat(index)
                    setQa(item.faqs)
                    setOpenQuestion(null)
                  }} style={selectedCat == index ? { margin: 10, padding: 10, backgroundColor: "#525252", borderTopRightRadius: 10, borderTopLeftRadius: 10 } : { margin: 10, padding: 10 }}>
                    <Text style={selectedCat == index ? { color: "#fff", fontWeight: "bold", fontSize: 15 } : { color: "#000000", fontWeight: "500", fontSize: 15 }}>{item.category_name}</Text>
                  </TouchableOpacity>
                )
              }}
            />

            <FlatList
              data={qa}
              scrollEnabled={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginHorizontal: 20 }} >
                    <TouchableOpacity onPress={() => setOpenQuestion(openQuestion && openQuestion == index ? null : index)} style={{ padding: 10, paddingVertical: 10 }}>
                      <Text style={{ fontWeight: '500', fontSize: 17 }}>{item.question}</Text>
                    </TouchableOpacity>
                    <View style={[styles.divider, { marginTop: 0 }]} />

                    {openQuestion !== null && openQuestion == index ? < View style={{ padding: 10 }}>
                      <HTMLView
                        value={item.answer}
                      />
                    </View> : null}
                  </View>
                )
              }}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Faq
