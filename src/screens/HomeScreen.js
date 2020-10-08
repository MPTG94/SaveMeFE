import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>SaveMe</Text>
      <Button
      onPress={() => navigation.navigate('Components')}
      title="Go To Settings Screen" />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subHeaderStyle:{
    fontSize: 20

  }
});

export default HomeScreen;


