import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import MovieCard from '../../components/movies/movieCard'
import { screenWidth } from '../../utils/constants';

const Movies = ({ route }) => {
  // route.params is an object like { data: [...] }
  // ensure we pass an array to FlatList
  const data = useMemo(() => 
    Array.isArray(route?.params?.data) ? route.params.data : []
  , [route?.params?.data]);

  const keyExtractor = useCallback((item) => item.id?.toString() || Math.random().toString(), []);
  
  const renderItem = useCallback(({ item }) => <MovieCard movie={item} />, []);
  
  const ListEmptyComponent = useCallback(() => (
    <View style={{ padding: 24 }}>
      <Text style={{ color: '#fff' }}>No movies to display</Text>
    </View>
  ), []);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
      numColumns={2}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default Movies

const styles = StyleSheet.create({})