import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { React, useState } from 'react';
import { HeaderUser } from '../layout/header';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UserScreen({ navigation: { navigate } }) {
  const [name, onChangeName] = useState("Nguyễn Thái Học");
  const [mail, onChangeMail] = useState("thaihoc.forwork@gmail.com");
  const [phone, onChangePhone] = useState("012346789");

  return (
    <View style={styles.container}>
      <HeaderUser />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 30 }}>
        <Image source={require('../../../assets/images/avatar.png')} style={{ width: 200, height: 200, borderRadius: '100%' }} />
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.groupInput}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
        </View>
        <View style={styles.groupInput}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMail}
            value={mail}
          />
        </View>
        <View style={styles.groupInput}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
          />
        </View>
      </View>
      <View style={{ marginTop: 30}}>
        <TouchableOpacity style={styles.btnUpdateProfile}>
          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '500', fontSize: 18}}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10}}>
        <TouchableOpacity style={styles.btnLogout} onPress={() => navigate('auth', { screen: 'login' })}>
          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '500', fontSize: 18}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%'
  },
  input: {
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    fontWeight: '400',
    fontSize: 18,
  },
  groupInput: {
    marginLeft: '5%',
    width: '90%',
    height: 50,
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  btnUpdateProfile: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#F16529',
    borderRadius: 20,
    paddingVertical: 18,
    marginTop: 10,
  },
  btnLogout: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#000000',
    borderRadius: 20,
    paddingVertical: 18,
    marginTop: 10,
  }
});
