import {  Image, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import { TABMENU } from '../../utils/routes';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';


const Accounts: React.FC = () => {
  const navigation = useNavigation<any>();
  const {accounts} = useSelector((state: RootState) => state.accounts);
  return (
    <View style={defaultScreenStyle.container}>
      <Text style={styles.title}>Who's Watching?</Text>
       <FlatList
      data={accounts}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{ padding: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={()=> navigation.navigate(TABMENU)}
        style={{ flex: 1, alignItems: 'center', marginBottom: 40 }}>
          <Image
            source={item.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
            resizeMode="cover"
          />
          <Text style={styles.titleName}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  titleName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})