import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import HTMLView from 'react-native-htmlview'
import { useSelector } from 'react-redux'
import { grey } from '../Colors/Color'
import styles from "./style"

const CmsView = ({
    route
}) => {
    const appSettings = useSelector(state => state.appSettings)
    console.log(route.params)
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
                            <Text style={{ fontSize: 35, fontWeight: "bold", color: grey, textTransform: "uppercase", width: "90%" }} numberOfLines={1} adjustsFontSizeToFit > {route.params.data.page_name} </Text>
                        </View>

                        <View style={{ marginTop: 10, width: "90%" }}>
                            <HTMLView 
                              value={route.params.data.description}
                            />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default CmsView
