import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FooterProduct from '../layout/footer';
import HeaderProduct from '../layout/header';

export default function ProductDetail({ navigation: { navigate, goBack }, route }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <HeaderProduct goBack={goBack}></HeaderProduct>
            <View style={styles.content}>
                <View style={{ marginVertical: 15 }}>
                    <Image style={styles.imageThumnail} source={item.url} />
                </View>
                <Text style={styles.productNameTxt}>{item.name}</Text>
                <Text style={styles.priceTxt}>{item.price} VND</Text>
                <Text style={styles.titleDescription}>Mô tả sản phẩm</Text>
                <Text style={styles.contentDescription}>
                    Trang trí ngôi nhà bạn trở nên hiện đại, nâng chất lượng cuộc sống của bạn lên một tầm cao mới sang trọng và quý's tộc hơn.
                    Cảm biến chuyển động siêu nhạy tự động bật tắt đèn cầu thang khi có người đi lại..
                </Text>
            </View>
            <FooterProduct></FooterProduct>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    content: {
        width: '95%',
        marginHorizontal: '2.5%',
    },
    imageThumnail: {
        width: '100%',
        height: 350
    },
    productNameTxt: {
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold',
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
