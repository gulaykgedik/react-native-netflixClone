import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import MovieCard from '../../components/movies/movieCard'
import { screenWidth } from '../../utils/constants';
import { Movie } from '../../models/data/moviesState';
import { ListRenderItem } from 'react-native';

interface MoviesProps {
  route?: {
    params?: {
      data?: Movie[];
    };
  };
}

const Movies: React.FC<MoviesProps> = ({ route }) => {

  const data = useMemo(() => 
    Array.isArray(route?.params?.data) ? route.params.data : []
  , [route?.params?.data]);

  const keyExtractor = useCallback((item: Movie) => item.id?.toString() || Math.random().toString(), []);
  
  const renderItem: ListRenderItem<Movie> = useCallback(({ item }) => <MovieCard movie={item} />, []);
  
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