import { React, useState, useContext, createContext } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export const ItemContext = createContext();

export function Item({ item, navigation }) {
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('product', { screen: 'productDetail', params: { item: item } })}>
            <Image source={item.url} style={styles.image} />
            <View style={styles.itemContent}>
                <View>
                    <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => item.isFavorite = !item.isFavorite}>
                    {
                        item.isFavorite ? <AntDesign name="heart" size={24} color="#ED7C54" /> : <Octicons name="heart" size={24} color="#000" />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        width: '50%',
        height: 250,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 4,
        marginHorizontal: 2,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.00,
        elevation: 5,
    },
    image: {
        width: '80%',
        height: 150,
    },
    itemName: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        width: 120,
    },    
    itemPrice: {
        color: '#F16529',
        marginVertical: 5,
        fontWeight: 'bold',
    },
    itemContent: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'flex-end',
    }
});

