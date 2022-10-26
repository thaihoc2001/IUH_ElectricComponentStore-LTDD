import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const DATA = [
    {
        id: 1,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../assets/images/product_1.png'),
    },
    {
        id: 2,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../assets/images/product_1.png'),
    },
    {
        id: 3,
        name: 'Mach dieu khien led cau thang thong minh',
        price: 100000,
        url: require('../../assets/images/product_1.png'),
    }
]
const numberCollumns = 2;
const Item = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image source={item.url} style={styles.image} />
            <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
        </View>
    )
}

export default function HomeScreen({ navigation: { navigate } }) {
    const renderItem = ({ item }) => {
        return (
          <Item item={item}/>
        );
      };
    
    return (
        <View style={styles.outerHome}>
            <Image
                style={styles.slideImage}
                source={require('../../assets/images/CTKM-1-1024x433.jpg')}
            />
            <View style={styles.listCategory}>

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
    },
    products: {
        marginTop: 5,
        marginHorizontal: 5
    },
    item: {
        width: '50%',
        height: 230,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 4,
        marginTop: 10,
        marginHorizontal: 5
    },
    image: {
        width: 150,
        height: 150,
    }
});
