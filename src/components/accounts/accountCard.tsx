import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenWidth, screenHeight } from '../../utils/constants';
import { AccountCardProps } from '../../screens/accounts/accountCardProps';

const AccountCard: React.FC<AccountCardProps> = ({account}) => {
  return (
    <View style={{  ...styles.container, backgroundColor:account.image}}>
      <Text>{account.name} </Text>
    </View>
  )
}

export default AccountCard

const styles = StyleSheet.create({
  container:{
    height: screenHeight *0.4,
    width:screenWidth *0.4 ,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    margin:10
  }
})