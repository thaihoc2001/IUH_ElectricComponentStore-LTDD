import { Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function UserScreen({ navigation: { navigate } }) {
  return (
    <Text>
        <Button onPress={() => navigate('Home')} title="Login"></Button>
        <Button onPress={() => navigate('Home')} title="Register"></Button>
    </Text>
  );
}

const styles = StyleSheet.create({
});
