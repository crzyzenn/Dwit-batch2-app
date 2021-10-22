import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Center from "../components/Center";

const SuccessScreen = ({ navigation: { navigate } }) => {
  return (
    <Center>
      <Text>
        Your order has been successfully created. Our team will get back to
        you...
      </Text>
      <Button
        type="clear"
        title="Shop more.."
        onPress={() => navigate("HomeStack")}
      />
    </Center>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
