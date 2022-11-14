import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HeaderCart } from '../../screens/layout/header';
import { LIST_PRODUCT_IN_CART } from '../../fake-data/store';

export default function CartScreen({ navigation: { navigate, goBack} }) {
  let total = 0;
  return (
    <View style={styles.container}>
      <HeaderCart goBack={goBack} />
      <View style={{ height: '85%', marginTop: 20 }}>
        <ScrollView horizontal={false}>
          {
            LIST_PRODUCT_IN_CART.map((item, index) => {
              total += item.price;
              return (
                <View style={styles.groupItem}>
                  <Image style={styles.imageItem} source={item.url} />
                  <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', width: '60%'}}>
                    <View>
                      <Text style={styles.nameItem}>{item.name}</Text>
                      <Text style={{ color: '#A4A5A9', marginVertical: 10 }}>Color: Black</Text>
                      <Text style={styles.priceItem}>${item.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginVertical: 15, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center', padding: 10, borderRadius: 15}}>
                      <TouchableOpacity>
                        <AntDesign name="pluscircle" size={28} color="black" />
                      </TouchableOpacity>
                      <Text style={{ marginVertical: 5, fontSize: 20 }}>1</Text>
                      <TouchableOpacity>
                        <AntDesign name="minuscircle" size={28} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, textAlign: 'center', marginTop: 20 }}>Amount: ${total}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={[styles.btnBuyNow, styles.btn]} onPress={() => navigate('layout', {screen: 'Cart', params: {screen: 'infor-order'}})}>
              <Text style={styles.textBuyNow}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
