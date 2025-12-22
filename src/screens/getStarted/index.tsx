import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/ui/button';
import { ACCOUNTS } from '../../utils/routes';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Colors from '../../theme/colors';

const GetStarted: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/getStarted.png')}
      style={styles.background}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <Image
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.image}
        source={require("../../assets/images/backImage.png")} />
      <View style={styles.content}>
        <Text style={styles.title}>Unlimited entertainment, one low price.</Text>
        <Text style={styles.description}>All of Netflix, starting at just £149.</Text>
        <Button onPress={()=> navigation.navigate(ACCOUNTS)} title="GET STARTED" fullWidth/>
      </View>
    </ImageBackground>
  );
}

export default GetStarted

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    height: 200,
    width: '100%',
    bottom: 0,
    padding: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
    width: '80%',
    textAlign: 'center',

  },
})