import React from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import AppButton from "../components/AppButton";
import Center from "../components/Center";
import { logout } from "../redux/slices/authSlice";

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <Center>
      <Text>Settings Screen</Text>
      <AppButton
        text="Go to product details screen"
        onPress={() => {
          navigation.navigate("ProductDetails");
        }}
      />
      <AppButton
        text="Logout"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </Center>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
