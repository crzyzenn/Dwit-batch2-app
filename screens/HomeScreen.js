import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import AppButton from "../components/AppButton";
import Center from "../components/Center";

const HomeScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Home Screen</Text>
      {/* <Ionicons name="settings" size={200} /> */}
      <Feather name="home" size={200} />
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
