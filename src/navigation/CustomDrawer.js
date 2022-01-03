import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from 'react-redux';
import { getAppSettings } from '../stores/actions/settings.action';

const CustomDrawer = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAppSettings())
    }, [])
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
            <DrawerItemList {...props} />
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
