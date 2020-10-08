import React from "react";
import { render } from "react-dom";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import {ReactMic} from 'react-mic';

const HomeScreen = ({navigation}) => {
  render()
  return <View>
      <Text style={styles.text}>SaveMe</Text>
      <Button
      onPress={() => navigation.navigate('Components')}
      title="Go To Settings Screen" />
      <Button
      title="Start Recording"
      />
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subHeaderStyle:{
    fontSize: 20

  }
});

export default HomeScreen;


