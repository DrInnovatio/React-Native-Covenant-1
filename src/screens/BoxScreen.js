import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={ styles.viewStyle }>
      <Text style={ styles.textOneStyle }>child #1</Text>
      <Text style={ styles.textTwoStyle }>child #2</Text>
      <Text style={ styles.textThreeStyle }>child #3</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 350

  },
  textOneStyle: {
    height: 100,
    width: 100,
    borderColor: 'red',
    backgroundColor: 'red'
  },
  textTwoStyle: {
    height: 100,
    width: 100,
    borderColor: 'green',
    backgroundColor: 'green',
    top: 100
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    borderColor: 'blue',
    backgroundColor: 'blue'
  }
});

export default BoxScreen;