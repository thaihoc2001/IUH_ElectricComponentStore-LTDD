import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { HeaderInformation } from '../layout/header';
import { LIST_PRODUCT_IN_CART } from '../../fake-data/store';
import { AntDesign } from '@expo/vector-icons';

export default function OrderInforScreen({ navigation: { navigate, goBack } }) {
    let total = 0;
    return (
        <View style={styles.container}>
            <HeaderInformation goBack={goBack} />
            <View style={styles.content}>
                <View style={styles.informationContent}>
                    <View>
                        <Text style={styles.textCenter}>Name: Nguyen Thai Hoc</Text>
                        <Text style={styles.textCenter}>Address: 134 Vo Thi Sau, Phuong Vo Thi Sau, TP Ho Chi Minh</Text>
                        <Text style={styles.textCenter}>Phone number: 0123456789</Text>
                        <Text style={styles.textCenter}>Email: thaihoc.forwork@gmail.comb </Text>
                    </View>
                    <ScrollView horizontal={false}>
                        {
                            LIST_PRODUCT_IN_CART.map((item, index) => {
                                total += item.price;
                                return (
                                    <View style={styles.groupItem}>
                                        <Image style={styles.imageItem} source={item.url} />
                                        <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
                                            <View>
                                                <Text style={styles.nameItem}>{item.name}</Text>
                                                <Text style={{ color: '#A4A5A9', marginVertical: 10 }}>Color: Black</Text>
                                                <Text style={styles.priceItem}>${item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, textAlign: 'center', marginTop: 20 }}>Amount: ${total}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={[styles.btnBuyNow, styles.btn]} onPress={() => navigate('layout', { screen: 'Cart', params: { screen: 'order-complete' } })}>
                        <Text style={styles.textBuyNow}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        height: '70%'
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
    },
    textCenter: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18,
        fontWeight: '500',
    },
    informationContent: {
        marginVertical: 30,
        height: '90%'
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
        height: 150
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
