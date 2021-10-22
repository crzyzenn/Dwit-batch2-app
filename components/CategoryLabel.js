import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryLabel = ({ label }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{label}</Text>
    </View>
  );
};

export default CategoryLabel;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "teal",
    padding: 3,
    borderRadius: 20,
    maxWidth: "60%",
    marginBottom: 10,
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "white",
  },
});
