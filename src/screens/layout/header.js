import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome5";
import { Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
    header: {
        marginTop: '10%',
        width: '100%',
        height: '5%',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 2,
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