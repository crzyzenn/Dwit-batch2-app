import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cat = ({ name }) => {
  return (
    <View style={styles.catContainer}>
      <Text>I am your new cat. My name is {name}!</Text>
    </View>
  );
};

export default Cat;

const styles = StyleSheet.create({
  catContainer: {
    backgroundColor: "teal",
    padding: 10,
  },
});
