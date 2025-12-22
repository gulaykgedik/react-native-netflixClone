import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from '../../store/actions/moviesActions';
import Colors from '../../theme/colors';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { screenHeight, screenWidth } from '../../utils/constants';
import { IMAGE_URL } from '../../service/url';
import { ArrowRight2 } from 'iconsax-react-nativejs';
import { AppDispatch, RootState } from '../../store/store';
import { Movie } from '../../models/data/moviesState';

interface MovieDetailProps {
  route?: {
    params?: {
      movie?: Movie;
    };
  };
}

const MovieDetail: React.FC<MovieDetailProps> = ({ route }) => {
  const { pending, movieData } = useSelector((state:RootState) => state.movies);
  const movie = route?.params?.movie;

  const backdropPath = useMemo(() => {
    const data = movieData as Movie;
    return data?.backdrop_path || movie?.backdrop_path;
  }, [movieData, movie?.backdrop_path]);

  const uri = useMemo(() => 
    backdropPath ? `${IMAGE_URL}${backdropPath}` : null
  , [backdropPath]);

  const posterUri = useMemo(() => {
    const data = movieData as Movie;
    return data?.poster_path ? `${IMAGE_URL}${data.poster_path}` : null;
  }, [movieData]);

  const voteAverage = useMemo(() => 
    movie?.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
  , [movie?.vote_average]);

  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    if (movie?.id) {
      dispatch(getMovieData(movie.id));
    }
  }, [dispatch, movie?.id]);

  const handleStartPress = useCallback(() => {
    // Add your navigation or action here
  }, []);

  return (
   <View style={defaultScreenStyle.container}>
     <ScrollView >
      {
        pending ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color={Colors.RED} />
          </View>
        ) : (
          <View>
            {uri ? (
              <View>
                <Image source={{ uri }} style={styles.image} />
                {posterUri && <Image source={{ uri: posterUri }} style={styles.imagePoster} />}
                <View style={styles.voteContainer}>
                  <Text style={styles.vote_average}>
                    IMDB: {voteAverage}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.noImage}>
                <Text>No image available</Text>
              </View>
            )}
          </View>
        )
      }
      <View style={{ padding: 20, paddingTop: screenHeight * 0.07 }}>
        <Text style={{ color: Colors.WHITE, fontSize: 24, fontWeight: '700', marginBottom: 10 }}>
          {(movieData as Movie)?.title || 'No Title'}
        </Text>
        <Text style={{ color: Colors.WHITE, fontSize: 16, lineHeight: 22 }}>
          {(movieData as Movie)?.overview || 'No Overview Available'}
        </Text>
        <Text style={{ color: '#888', fontSize: 14, marginTop: 10 }}>
          Release Date: {(movieData as Movie)?.release_date || 'N/A'}
        </Text>
        <Text style={{ color: '#888', fontSize: 14, marginTop: 4 }}>
          Runtime: {(movieData as Movie)?.runtime ? `${(movieData as Movie).runtime} minutes` : 'N/A'}
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 8 }}>
          {Array.isArray((movieData as Movie)?.genres) && (movieData as Movie).genres!.length > 0 ? (
            (movieData as Movie).genres!.map((g: { id: number; name: string }, index: number) => (
              <View key={index} style={styles.chip}>
                <Text style={styles.chipText}>{g.name}</Text>
              </View>
            ))
          ) : (
            <View style={styles.chip}>
              <Text style={styles.chipText}>N/A</Text>
            </View>
          )}
        </View>
      </View>

      
    </ScrollView>
     <TouchableOpacity style={styles.fixedButton} onPress={handleStartPress}>
    <Text style={styles.startButtonText}>Let's Get Started</Text>
    <ArrowRight2 color={Colors.WHITE} />
  </TouchableOpacity>
   </View>



  )
}

export default MovieDetail

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 1,
    height: screenHeight * 0.25,
    borderRadius: 8,
  },
  imagePoster: {
    width: screenWidth / 3,
    height: screenHeight * 0.2,
    borderRadius: 8,
    position: 'absolute',
    bottom: -screenHeight * 0.05,
    left: 20,
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
  noImage: {
    width: screenWidth * 1,
    height: screenHeight * 0.25,
    borderRadius: 8,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  voteContainer: {
    position: 'absolute',
    backgroundColor: Colors.YELLOW,
    padding: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
    bottom: -screenHeight * 0.05,
    borderRadius: 40,
  },
  vote_average: {
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 12,
  },
  chip: {
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    color: Colors.WHITE,
    fontSize: 14,
  },
  fixedButton: {
   position: "absolute",
  bottom: 50,
  left: 20,
  right: 20,
  backgroundColor: Colors.RED,
  paddingVertical: 14,
  borderRadius: 6,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
  elevation: 5, // Android gölge
  shadowColor: "#000", // iOS gölge
  shadowOpacity: 0.3,
  shadowRadius: 6,
},
  startButtonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "600",
  },
})