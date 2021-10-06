// Places the children of the component to the center of the screen
import React from "react";
import { StyleSheet, View } from "react-native";

const Center = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },
});
