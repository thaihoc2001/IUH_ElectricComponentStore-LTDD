import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome";
import IconFeather from "@expo/vector-icons/Feather";

export default function Register({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    name="home"
                    size={25}
                    color={'#fff'}
                    onPress={() => navigate('layout', { screen: 'Home' })} />
            </View>
            <View style={styles.logo}>
                <Image source={require('../../../assets/images/LogoHomie.png')} style={styles.image} />
            </View>
            <View style={styles.groupFormLogin}>
                <Text style={styles.titleForm}>REGISTER</Text>
                <SafeAreaView>
                    <View style={styles.inputGroup}>
                        <Icon
                            name="user-o"
                            size={25}
                            color={'#000'}/>
                        <TextInput
                           style={styles.input}
                            placeholder="Username"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <IconFeather
                            name="mail"
                            size={25}
                            color={'#000'}/>
                        <TextInput
                           style={styles.input}
                            placeholder="Email"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <IconFeather
                            name="lock"
                            size={25}
                            color={'#000'}/>
                        <TextInput
                           style={styles.input}
                            placeholder="Password"
                        />
                    </View>
                </SafeAreaView>
                <TouchableOpacity style={[styles.btnLogin, styles.btn]} onPress={() => navigate('auth', { screen: 'login' })}>
                    <Text style={styles.pressableText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textToLogin} onPress={() => navigate('auth', { screen: 'login' })}>YOU HAVE ACCOUNT</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    header: {
        marginTop: '10%',
        marginLeft: '5%',
    },
    logo: {
        alignItems: 'center',
        height: '30%',
    },
    btn: {
        backgroundColor: '#F16529',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 15,
        borderRadius: 50,
    },
    btnLogin: {
        backgroundColor: '#fff',
    },
    titleForm: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    groupFormLogin: {
        backgroundColor: '#fff',
        height: '45%',
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5.00,
        elevation: 5,
    },
    inputGroup: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginHorizontal: 20,
        borderRadius: '5%',
        marginTop: 25,
        flexDirection: 'row',
    },
    input: {
        marginLeft: 10,
    },
    pressableText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textForgetpassword: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textToLogin: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'normal',
    },
    groupIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 80,
        marginTop: 20
    }
});
