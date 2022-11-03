import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Button, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function FooterProduct() {
    return (
        <View style={[styles.footer]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <TouchableOpacity style={[styles.addCart, styles.btn]}>
                    <MaterialIcons name="add-shopping-cart" size={24} color="#F16529" />
                    <Text style={styles.textAddCart}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnBuyNow, styles.btn]}>
                    <Text style={styles.textBuyNow}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function FooterOrder() {
    return (
        <View style={[styles.footer]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <TouchableOpacity style={[styles.btnBuyNow]}>
                    <Text style={styles.textBuyNow}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        height: '6%',
    },
    btn: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    btnBuyNow: {
        backgroundColor: '#F16529',
    },
    addCart: {
        borderWidth: 2,
        borderColor: '#C4C4C4',
    },
    textAddCart: {
        color: '#F16529',
        fontWeight: 'bold',
        fontSize: 16
    },
    textBuyNow: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
    
})