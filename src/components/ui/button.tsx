import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../theme/colors'
import { screenHeight } from '../../utils/constants';
import ButtonProps from '../../models/ui/buttonProps';

const Button:React.FC<ButtonProps> = (props) => {
    const { title, fullWidth = false } = props;
  return (
    <TouchableOpacity {...props}

    style={[styles.container, fullWidth && styles.full]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.RED,
    padding: 15,
    height: screenHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 40,
    margin:10
  },
  full: {
    alignSelf: 'stretch',
    marginHorizontal: -16,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
});