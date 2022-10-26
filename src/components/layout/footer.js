import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Button } from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome5";

export default function FooterHome() {
    return (
        <View style={[styles.footer]}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
                <View style={styles.iconHome}>
                    <Icon name="home" size={30} color="#F16529" />
                </View>
                <View>
                    <Icon name="clipboard-list" size={30} color="#F16529" />
                </View>
                <View style={styles.iconUser}>
                    <Icon name="user" size={30} color="#F16529" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '8%',
        borderTopWidth: 2,
        borderTopColor: '#C4C4C4',
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