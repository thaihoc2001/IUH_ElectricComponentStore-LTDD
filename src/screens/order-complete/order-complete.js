import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { HeaderInformation } from '../layout/header';
import { DATA } from '../../fake-data/store';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export default function OrderComplete({ navigation: { navigate, goBack } }) {
    let total = 0;
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', marginHorizontal: 5, fontSize: 18, fontWeight: '400', marginBottom: 10}}>
                Your order has been completed. Please return to the home page to continue shopping. Thank you for choosing our store.
            </Text>
            <Ionicons name="ios-checkmark-circle-outline" size={80} color="#82E62D" />
            <TouchableOpacity style={styles.btn} onPress={() => navigate('layout', {screen: 'Home'})}>
                <Text style={styles.textBtn}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        marginTop: 20,
        padding: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        backgroundColor: '#F16529',
    },
    textBtn: {
        color: '#fff',
        fontSize: 18,
    }
});
