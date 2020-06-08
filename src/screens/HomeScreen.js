import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={ styles.text }>Bora</Text>
      <Button
        onPress={ () => navigation.navigate('Components') }
        title="Go to components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={ () => navigation.navigate('List') }
      />
      <Button
        title="Go to Image Screen"
        onPress={ () => navigation.navigate('Image') }
      />


      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
