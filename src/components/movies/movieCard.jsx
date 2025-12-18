import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { IMAGE_URL } from '../../service/url'
import { screenHeight, screenWidth } from '../../utils/constants';
import Colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { MOVİE_DETAIL } from '../../utils/routes';

const MovieCard = memo(({ movie }) => {
    const navigation = useNavigation();
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
                    <Text style={styles.placeholderText}>{movie.title || movie.name || 'No Image'}</Text>
                </View>
            )}
            <View style={styles.voteContainer}>
                <Text style={styles.vote_average}>
                    IMDB: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                </Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.title} numberOfLines={1}>
                    {movie.title || movie.name || 'No Title'}
                </Text>
                 <Text style={styles.vote_count} numberOfLines={1}>
                    {movie.vote_count} Votes
                </Text>
            </View>
        </Pressable>
    );
});

export default MovieCard

const styles = StyleSheet.create({
    pressable: {
        margin: 15,
        width: screenWidth / 2,
        alignItems: 'center',
        marginLeft: -12,
    },
    image: {
        width: screenWidth / 2 - 20,
        height: screenHeight * 0.35,
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
        right: 10,
    },
    vote_average: {
        color: Colors.BLACK,
        fontWeight: '700',
        fontSize: 12,
    },
    title: {
        color: Colors.WHITE,
        fontSize: 15,
        fontWeight: '600',
        marginTop: 8,
        marginVertical: 5,
        width: screenWidth / 2 - 20,
    },
    vote_count: {
        color: Colors.GRAY,
        fontSize: 12,
        fontWeight: '500',
    
    },
})