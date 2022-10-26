import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function UserScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/images/logo.png')} style={styles.image} />
      </View>
      <Button onPress={() => navigate('auth', { screen: 'login' })} variant="outlined" title="Login" color="#F16529" style={[styles.btnLogin, styles.btn]}></Button>
      <Button onPress={() => navigate('auth', { screen: 'register' })} variant="outlined" title="Register" color="#F16529" style={[styles.btnRegister, styles.btn]}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F16529',
    height: '100%'
  },
  logo: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
  },
  btnLogin: {
    backgroundColor: '#fff',
  },
  btnRegister: {
    backgroundColor: '#fff',
  }
});
