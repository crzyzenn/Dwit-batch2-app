import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppButton from "./AppButton";

const Cat = ({ name }) => {
  return (
    <View style={styles.catContainer}>
      <Text>I am your new cat. My name is {name}!</Text>
      <AppButton text="Feed me!" />
    </View>
  );
};

// // syntax similar to yup - schema
// Cat.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Cat;

const styles = StyleSheet.create({
  catContainer: {
    backgroundColor: "teal",
    padding: 10,
  },
});
