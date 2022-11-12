import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { HeaderHome } from '../layout/header';
import { Octicons } from '@expo/vector-icons'; 

const DATA = [
    {
        id: 1,
        name: 'Iphone 11',
        price: 500,
        url: require('../../../assets/images/iphone-11-trang.jpg'),
    },
    {
        id: 2,
        name: 'Galaxy S22 Ultra Burgundy',
        price: 800,
        url: require('../../../assets/images/Galaxy-S22-Ultra-Burgundy.jpg'),
    },
    {
        id: 3,
        name: 'Samsum Glaxy Zip 4',
        price: 1000,
        url: require('../../../assets/images/samsung-galaxy-z-flip4.jpg'),
    },
    {
        id: 4,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 400,
        url: require('../../../assets/images/iphone-11-trang.jpg'),
    },
    {
        id: 5,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 1010,
        url: require('../../../assets/images/iphone-11-trang.jpg'),
    }
]

const DATACATEGORY = [
    {
        id: 1,
        name: 'Phone',
        url: require('../../../assets/images/icon-phone.png'),
    },
    {
        id: 2,
        name: 'Laptop',
        url: require('../../../assets/images/icon-laptop.png'),
    },
    {
        id: 3,
        name: 'watch',
        url: require('../../../assets/images/icon-watch.png'),
    },
    {
        id: 4,
        name: 'Headphone',
        url: require('../../../assets/images/icon-headphone.png'),
    },
    {
        id: 3,
        name: 'Accessory',
        url: require('../../../assets/images/icon-tablet.png'),
    }
]
const numberCollumns = 2;
const Item = ({ item, navigate }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigate('product', { screen: 'productDetail', params: { item: item } })}>
            <Image source={item.url} style={styles.image} />
            <View style={styles.itemContent}>
                <View>
                    <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <TouchableOpacity>
                    <Octicons name="heart" size={30} color="black"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default function HomeScreen({ navigation: { navigate } }) {
    const renderItem = ({ item }) => {
        return (
            <Item item={item} navigate={navigate} />
        );
    };
    return (
        <View style={styles.outerHome}>
            <HeaderHome></HeaderHome>
            <View style={{ marginTop: 20 }}>
                <Slideshow
                    dataSource={[
                        { url: require('../../../assets/images/2.png') },
                        { url: require('../../../assets/images/CTKM-1-1024x433.jpg') },
                        { url: require('../../../assets/images/1.png') },
                    ]}
                />
            </View>
            <View style={styles.listCategory}>
                <ScrollView horizontal={true}>
                    {
                        DATACATEGORY.map((item, index) => {
                            return (
                                <View style={styles.category}>
                                    <TouchableOpacity style={styles.categoryItem}>
                                        <Image source={item.url} style={styles.categoryImage} />
                                        <Text style={styles.categoryName}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.products}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numberCollumns}
                >
                </FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerHome: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    slideImage: {
        width: '100%',
        height: '25%',
    },
    listCategory: {
        marginTop: 10,
        width: '100%',
        height: '12%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryItem: {
        backgroundColor: '#F8F8F8',
        marginHorizontal: 10,
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0.8,
            height: 0.8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.00,
        elevation: 5,
    },
    categoryName: {
        color: '#4B4A4F',
        fontWeight: 'bold',
    },
    products: {
        marginTop: 5,
        marginHorizontal: 5,
        height: '50%',
    },
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
    categoryImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    itemContent: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'flex-end',
    }
});
