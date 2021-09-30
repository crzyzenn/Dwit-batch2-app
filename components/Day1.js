import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cat from "./components/Cat";

export default function Day1() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container1}>
        <View>
          <Cat name="Jim" />
          <Cat name="Bob" />
          <Cat name="Dylan" />
          <Cat name="Nike" />

          {/* <p>Hello world...</p> */}
          <Text style={styles.title}>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
        </View>
      </View>
      <View style={styles.container2}>
        {/* <p>Hello world...</p> */}
        <Text style={styles.title}>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "white",
    // -------- x-axis
    // flexDirection: "row",

    // |
    // |
    // |
    // y-axis
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container2: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
});
