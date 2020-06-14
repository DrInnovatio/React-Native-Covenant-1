import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Enter the name : </Text>
      <TextInput
        style={ styles.input }
        autoCapitalize="none"
        autoCorrect={ false }
        value={ name }
        onChangeText={ (newValue) => setName(newValue) }
      />
      <Text>My name is { name }</Text>
      { false ? <Text>That was true.</Text> : null }
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 15
  }
});

export default TextScreen;