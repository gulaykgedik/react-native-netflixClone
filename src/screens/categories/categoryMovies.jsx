import React, { useEffect, useState, useMemo, useCallback, memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Colors from "../../theme/colors";
import { IMAGE_URL } from "../../service/url";
import { useNavigation } from "@react-navigation/native";
import { getMoviesByGenre } from "../../store/actions/moviesActions";

const genresMap = {
  Action: 28,
  Adventure: 12,
  Drama: 18,
  Comedy: 35,
  Horror: 27,
  Thriller: 53,
  SciFi: 878,
  Fantasy: 14,
  Crime: 80,
  Documentary: 99,
  Mystery: 9648,
  Animation: 16,
  Family: 10751,
  Romance: 10749,
  War: 10752,
  History: 36,
};

const CategoryMovies = memo(({ route }) => {
  const { genre } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  // Sadece ihtiyaç duyulan state'leri al ve shallowEqual ile karşılaştır
  const moviesByGenre = useSelector((state) => state.movies.moviesByGenre, shallowEqual);
  const pending = useSelector((state) => state.movies.pending);

  const genreId = useMemo(() => genresMap[genre], [genre]);

  useEffect(() => {
    if (genreId) {
      dispatch(getMoviesByGenre(genreId));
    }
  }, [genreId, dispatch]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity
      style={styles.movieBox}
      onPress={() => navigation.navigate("MovieDetail", { movie: item })}
    >
      <Image
        source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
        style={styles.poster}
      />
    </TouchableOpacity>
  ), [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{genre} Movies</Text>

      <FlatList
        data={moviesByGenre}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={renderItem}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
});

export default CategoryMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 20,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  movieBox: {
    width: "32%",
    height: 160,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 14,
    backgroundColor: "#111",
  },
  poster: {
    width: "100%",
    height: "100%",
  },
});
