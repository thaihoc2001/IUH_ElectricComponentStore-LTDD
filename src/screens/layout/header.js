import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';

export function HeaderProduct({ navigate, goBack }) {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Ionicons name="chevron-back-outline" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Detail</Text>
                <TouchableOpacity style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Octicons name="heart" size={24} color='#7E7E7F' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderCart({ navigate, goBack }) {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Ionicons name="chevron-back-outline" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Cart</Text>
                <TouchableOpacity style={{}}>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderFavorite({ navigate, goBack }) {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Ionicons name="chevron-back-outline" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600'}}>Favorite</Text>
                <TouchableOpacity style={{}}>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderInformation({ navigate, goBack }) {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Ionicons name="chevron-back-outline" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600'}}>Information Order</Text>
                <TouchableOpacity style={{}}>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderUser({ navigate, goBack }) {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Ionicons name="chevron-back-outline" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600'}}>Profile</Text>
                <TouchableOpacity style={{}}>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HeaderHome() {
    const navigation = useNavigation();
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', marginHorizontal: 20 }}>
                <TouchableOpacity style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <FontAwesome5 name="bars" size={24} color="#7E7E7F" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Home</Text>
                <TouchableOpacity style={{ width: 50, height: 50, borderColor: '#DCDDE3', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
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
        shadowOffset: { 
            width: -2, 
            height: 2 
        },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})