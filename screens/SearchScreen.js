import React from "react";
import { StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import Center from "../components/Center";

const SearchScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Search Screen</Text>
      <AppButton
        text="Go to settings screen"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </Center>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
