import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.groupItem}>
        <Image style={styles.imageItem} source={require('../../../assets/images/product_1.png')} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.nameItem}>Mach dieu khien led cau thang thong minh</Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, fontSize: 20 }}>1</Text>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.priceItem}>100000 VND</Text>
        </View>
      </View>
      <View style={styles.groupItem}>
        <Image style={styles.imageItem} source={require('../../../assets/images/product_1.png')} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.nameItem}>Mach dieu khien led cau thang thong minh</Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, fontSize: 20 }}>1</Text>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.priceItem}>100000 VND</Text>
        </View>
        <AntDesign name="closesquareo" size={24} color="black" />
      </View>
      <View style={styles.groupItem}>
        <Image style={styles.imageItem} source={require('../../../assets/images/product_1.png')} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.nameItem}>Mach dieu khien led cau thang thong minh</Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, fontSize: 20, fontWeight: 'bold'}}>1</Text>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.priceItem}>100000 VND</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '95%',
    marginHorizontal: '2.5%',
  },
  groupItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imageItem: {
    width: 120,
    height: 120,
  },
  nameItem: {
    width: 200,
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceItem: {
    width: 300,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
