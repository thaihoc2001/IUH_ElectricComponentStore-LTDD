import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FooterProduct } from '../layout/footer';
import { HeaderProduct } from '../layout/header';

export default function ProductDetail({ navigation: { navigate, goBack }, route }) {
    const { item } = route.params;
    useEffect(() => {
        console.log(item);
    }, []);
    return (
        <View style={styles.container}>
            <HeaderProduct goBack={goBack}></HeaderProduct>
            <View style={styles.content}>
                <ScrollView>

                    <View style={{ marginVertical: 15 }}>
                        <Image style={styles.imageThumnail} source={item.url} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.productNameTxt}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="md-star-sharp" size={24} color="#E8C03A" />
                            <Text style={{ fontWeight: '700' }}>4.5<Text style={{ fontWeight: 'normal' }}> (10)</Text></Text>
                        </View>
                    </View>
                    <Text style={styles.priceTxt}>${item.price}</Text>
                    <Text style={styles.titleDescription}>Description</Text>
                    <Text style={styles.contentDescription}>{item.description}</Text>
                </ScrollView>
            </View>
            <FooterProduct></FooterProduct>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        backgroundColor: '#fff',
    },
    content: {
        width: '95%',
        height: '78%',
        marginHorizontal: '2.5%',
    },
    imageThumnail: {
        width: '90%',
        height: 350,
        marginLeft: '5%',
    },
    productNameTxt: {
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold',
        width: '70%'
    },
    priceTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F16529',
        marginTop: 10
    },
    titleDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    contentDescription: {
        fontSize: 20,
        marginTop: 10
    }
});
