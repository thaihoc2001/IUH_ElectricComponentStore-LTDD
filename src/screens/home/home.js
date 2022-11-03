import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

const DATA = [
    {
        id: 1,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 2,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 3,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 4,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 5,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    }
]

const DATACATEGORY = [
    {
        id: 1,
        name: 'DATACATEGORY 1',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 2,
        name: 'DATACATEGORY 2',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 3,
        name: 'DATACATEGORY 3',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 3,
        name: 'DATACATEGORY 4',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    },
    {
        id: 3,
        name: 'DATACATEGORY 5',
        price: 100000,
        url: require('../../../assets/images/product_1.png'),
    }
]
const numberCollumns = 2;
const Item = ({ item, navigate }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigate('product', { screen: 'productDetail', params: { item: item } })}>
            <Image source={item.url} style={styles.image} />
            <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price} VND</Text>
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
            <Slideshow
                dataSource={[
                    { url: require('../../../assets/images/CTKM-1-1024x433.jpg') },
                    { url: require('../../../assets/images/1.png') },
                    { url: require('../../../assets/images/2.png') }
                ]} />
            <View style={styles.listCategory}>
                <ScrollView horizontal={true}>
                    {
                        DATACATEGORY.map((item, index) => {
                            return (
                                <View style={styles.category}>
                                    <TouchableOpacity style={styles.categoryItem}>
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
        backgroundColor: '#F16529'
    },
    slideImage: {
        width: '100%',
        height: '25%',
    },
    listCategory: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryItem: {
        backgroundColor: '#F16529',
        marginHorizontal: 10,
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    },
    categoryName: {
        color: 'white',
        fontWeight: 'bold',
    },
    products: {
        marginTop: 5,
        marginHorizontal: 5,
        height: '65%',
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
    },
    image: {
        width: '100%',
        height: 170,
    },
    itemName: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemPrice: {
        color: '#F16529',
        marginVertical: 5,
        fontWeight: 'bold',
    }
});
