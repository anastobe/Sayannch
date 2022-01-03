import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
const { width, height } = Dimensions.get("screen")

const ProductCard = ({
    imageUrl = "https://shoprex.com/images/srproducts/large/golden-stylish-artificial-jewellery-set_44060.jpg",
    imageStyle = {},
    containerStyle = {}
}) => {
    return (
        <TouchableOpacity style={[{ width: (width / 2), alignItems: "center", marginTop: 10 }, containerStyle]}>
            <Image
                source={{ uri: imageUrl }}
                style={[{ height: 180, width: (width / 2) - 20 }, imageStyle]} />
            <View style={{ marginStart: 5 }}>
                <Text style={{ color: "#404243", fontWeight: '500', marginTop: 5, }}>Alamod</Text>
                <Text style={{ color: "#7B7C7D", marginTop: 5, fontSize: 13 }}>Dangler Earings with bead drops</Text>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>₹369</Text>
                    <Text style={{ color: "#7B7C7D", textDecorationLine: "line-through", textDecorationStyle: "solid" }}>{"  "}₹1420</Text>
                    <Text style={{ fontWeight: "bold" }}>{"  "}74% off</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({})
