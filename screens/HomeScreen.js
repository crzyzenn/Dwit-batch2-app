import React from "react";
import { Text } from "react-native";
import AppButton from "../components/AppButton";
import Center from "../components/Center";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Home Screen</Text>
      <Ionicons name="settings" size={200} />
      <AppButton
        text="Go to search screen"
        onPress={() => {
          navigation.navigate("Search");
        }}
      />
      <AppButton
        text="Go to product details screen"
        onPress={() => {
          navigation.navigate("ProductDetails");
        }}
      />
    </Center>
  );
};

export default HomeScreen;
