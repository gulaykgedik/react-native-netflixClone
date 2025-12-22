import { FlatList, StyleSheet, Text, View, ListRenderItem } from 'react-native'
import React, { memo, useCallback } from 'react'
import SectionTitle from '../ui/sectionTitle'
import MovieItem from './movieItem'
import { SectionProps } from '../../models/ui/sectionProps'
import { Movie } from '../../models/data/moviesState'

const Section: React.FC<SectionProps> = ({section}) => {
  const renderItem: ListRenderItem<Movie> = useCallback(({ item }) => <MovieItem movie={item} />, []);
  
  const keyExtractor = useCallback((item: Movie) => item.id?.toString() || Math.random().toString(), []);

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