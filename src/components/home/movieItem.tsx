import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { IMAGE_URL } from '../../service/url'
import { screenHeight, screenWidth } from '../../utils/constants';
import Colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { MOVİE_DETAIL } from '../../utils/routes';
import { Movie } from '../../models/data/moviesState';

interface MovieItemProps {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = memo(({ movie }) => {
    // console.log("movie item çalıitı");
    
    const navigation = useNavigation<any>();
    if (!movie) return null;

    // TMDB image url: IMAGE_URL + poster_path
    const uri = movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : null;

    const handlePress = useCallback(() => {
        navigation.navigate(MOVİE_DETAIL, { movie });
    }, [navigation, movie]);

    return (
        <Pressable
        onPress={handlePress}
        style={styles.pressable}>
            {uri ? (
                <Image source={{ uri }} style={styles.image} />
            ) : (
                <View style={[styles.image, styles.placeholder]}>
                    <Text style={styles.placeholderText}>{movie.title ||  'No Image'}</Text>
                </View>
            )}
            <View style={styles.voteContainer}>
                <Text style={styles.vote_average}>
                    IMDB: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                </Text>
            </View>
        </Pressable>
    );
});

export default MovieItem

const styles = StyleSheet.create({
    pressable: {
        marginHorizontal: 6,
    },
    image: {
        width: screenWidth * 0.4,
        height: screenHeight * 0.28,
        borderRadius: 8,

    },
    placeholder: {
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        paddingHorizontal: 6,
    },
    voteContainer: {
        position: 'absolute',
        backgroundColor: Colors.YELLOW,
        padding: 4,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
    },
    vote_average: {
        color: Colors.BLACK,
        fontWeight: '700',
        fontSize: 12,
    },
})