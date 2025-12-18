import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { MOVIES } from '../../utils/routes'

const SectionTitle = memo(({ title, data }) => {
  const navigation = useNavigation();
  
  const handleSeeAllPress = useCallback(() => {
    navigation.navigate(MOVIES, { data });
  }, [navigation, data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleSeeAllPress}>
      <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
  )
});

export default SectionTitle

const styles = StyleSheet.create({
    container:{ 
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        color:Colors.WHITE,
    },
    seeAll:{
        fontSize:18,
        color:Colors.YELLOW,
        fontWeight:'500',
    }
})