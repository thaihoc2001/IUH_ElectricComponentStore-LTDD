import { React, useContext, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Item } from "./item";
// import globalState from '../share/store/Context';

export function FlatListItem({item, numColumns}){
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <Item item={item} navigation={navigation} />
    );
    // const [state, dispatch] = useContext(globalState);R
    // useEffect(() => {
    //     console.log(item);
    // }, [state.data]);
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%', width: '100%' }}>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={numColumns}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
