import { StyleSheet } from 'react-native';
import Colors from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 8,
  
  },
  text: {
    color: Colors.WHITE,
    fontSize: 18,
  },
});

export  {defaultScreenStyle};