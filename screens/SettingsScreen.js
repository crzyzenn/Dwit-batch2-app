import React from "react";
import { StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import Center from "../components/Center";

const SettingsScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Settings Screen</Text>
      <AppButton
        text="Go to product details screen"
        onPress={() => {
          navigation.navigate("ProductDetails");
        }}
      />
    </Center>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
