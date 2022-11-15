import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Button, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export function FooterProduct() {
    const navigation = useNavigation();
    return (
        <View style={[styles.footer]}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <TouchableOpacity style={[styles.btnBuyNow, styles.btn]} onPress={() => navigation.navigate('layout', { screen: 'Cart'})}>
                    <Text style={styles.textBuyNow}>Add to card</Text>
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
        height: '8%',
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
    },
    btnBuyNow: {
        width: '90%',
        backgroundColor: '#F16529',
        borderRadius: 20,
        paddingVertical: 10,
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
        fontWeight: '600',
        fontSize: 20
    }
    
})