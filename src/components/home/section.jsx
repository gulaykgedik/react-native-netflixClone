import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import SectionTitle from '../ui/sectionTitle'
import MovieItem from '../../components/home/movieItem'

const Section = ({section}) => {
  const renderItem = useCallback(({ item }) => <MovieItem movie={item} />, []);
  
  const keyExtractor = useCallback((item) => item.id?.toString() || Math.random().toString(), []);

  return (
    <View style={styles.container}>
      <SectionTitle title={section.title} data={section.data} />
      <FlatList
        data={section.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 14,
   
  },
})

export default memo(Section)