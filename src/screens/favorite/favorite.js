import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { HeaderFavorite } from '../layout/header';
import { LIST_PRODUCT } from '../../fake-data/store';
import { AntDesign } from '@expo/vector-icons';

export default function FavoriteScreen({ navigation: { navigate, goBack } }) {
    return (
        <View style={styles.container}>
            <HeaderFavorite goBack={goBack} />
            <View style={{ height: '85%', marginTop: 20 }}>
                <ScrollView horizontal={false}>
                    {
                        LIST_PRODUCT.map((item, index) => {
                            if (item.isFavorite) {
                                return (
                                    <TouchableOpacity style={styles.groupItem} onPress={() => navigate('product', { screen: 'productDetail', params: { item: item } })}>
                                        <Image style={styles.imageItem} source={item.url} />
                                        <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
                                            <View>
                                                <Text style={styles.nameItem}>{item.name}</Text>
                                                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                                    <AntDesign name="star" size={24} color="#EDC12C" />
                                                    <AntDesign name="star" size={24} color="#EDC12C" />
                                                    <AntDesign name="star" size={24} color="#EDC12C" />
                                                    <AntDesign name="star" size={24} color="#EDC12C" />
                                                    <AntDesign name="star" size={24} color="#EDC12C" />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                                                    <Text style={styles.priceItem}>${item.price}</Text>
                                                    <TouchableOpacity>
                                                        <AntDesign name="heart" size={24} color="#ED7C54" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    groupItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#F6F7F9',
        marginVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        width: '100%',
    },
    imageItem: {
        width: 120,
        height: 120,
    },
    nameItem: {
        width: 150,
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceItem: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    btnBuyNow: {
        width: '90%',
        backgroundColor: '#F16529',
        borderRadius: 20,
        paddingVertical: 10,
        marginTop: 10
    },
    textBuyNow: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20
    }
});
