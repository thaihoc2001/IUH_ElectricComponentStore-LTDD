import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

export default function HeaderProduct({ navigate, goBack }) {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Ionicons name="arrow-back" size={35} color="#F16529" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="cart" size={35} color="#F16529" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderHome () {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity style={{width: 50,height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15}}>
                    <FontAwesome5 name="bars" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Home</Text>
                <TouchableOpacity style={{width: 50,height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15}}>
                    <FontAwesome name="search" size={24} color="#7E7E7F" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: '12%',
        width: '100%',
        height: '5%',
    },
    iconCart: {
        marginLeft: '4%',
    },
    iconSearch: {
        position: 'absolute',
        right: 10,
        top: 5
    },
    iconHome: {
        paddingLeft: '8%',
    },
    iconUser: {
        paddingRight: '8%',
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 2 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})