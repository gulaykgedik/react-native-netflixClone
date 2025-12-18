import { FlatList, StyleSheet, Text, View } from 'react-native'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import React, { use, useEffect, useMemo, useCallback } from 'react'
import Section from '../../components/home/section'
import {getRequest} from "../../service/verb"
import { POPULAR_URL } from '../../service/url'
import { useDispatch, useSelector } from 'react-redux'
import { getPopulerMovies, getNowPlayingMovies, getTopRatedMovies,getUpcomingMovies } from '../../store/actions/moviesActions'

const Home = () => {
  
  const { populerMovies, nowPlayingMovies,topRatedMovies, upcomingMovies} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const section = useMemo(() => [
    {
      id: 1,
      title: "Now Playing Movies",
      data: nowPlayingMovies,
    },
    {
      id: 2,
      title: "Popular Movies" ,
      data: populerMovies,
    },
    {
      id: 3,
      title: "Top Rated Movies",
      data: topRatedMovies
    },
    {
      id: 4,
      title: "Upcoming Movies",
      data: upcomingMovies
    },
  ], [nowPlayingMovies, populerMovies, topRatedMovies, upcomingMovies]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);
  
  const renderItem = useCallback(({ item }) => <Section section={item} />, []);

 useEffect(() => {
   dispatch(getPopulerMovies({}));
   dispatch(getNowPlayingMovies({}));
   dispatch(getTopRatedMovies({}));
   dispatch(getUpcomingMovies({}));
 }, [dispatch]);

 
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={section}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({})