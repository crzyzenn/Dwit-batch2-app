import { Platform } from "@unimodules/react-native-adapter";
import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AppButton from "./components/AppButton";
import Cat from "./components/Cat";

const Day2 = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const [inputStyle, setInputStyle] = useState({
    borderBottomWidth: 2,
    borderBottomColor: "#bbb",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  });

  console.log(firstNumber, secondNumber);

  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <View>
        <Text>Hello World</Text>
        <Cat name="Jim" />
        {/* <input type="text" place /> */}
        <TextInput
          keyboardType="numeric"
          style={styles.inputStyle}
          placeholder="Enter first number"
          // In react
          // onChange={e => setFirstNumber(e.target.value)}
          onChangeText={(val) => setFirstNumber(val)}
        />
        <TextInput
          keyboardType="numeric"
          onPressIn={() => {
            setInputStyle({
              ...inputStyle,
              backgroundColor: "yellow",
            });
          }}
          style={inputStyle}
          onChangeText={(val) => setSecondNumber(val)}
          placeholder="Enter second number"
        />

        {/* <button onClick>Add</button> */}
        <AppButton
          text="Add"
          onPress={() => {
            setResult(+firstNumber + +secondNumber);
          }}
          style={styles.bgRed}
        />
        {/* <Button
          title="Add"
          onPress={() => {
            setResult(+firstNumber + +secondNumber);
          }}
        /> */}
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Sum of these two inputs:
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {result}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Day2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#bbb",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    // padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bgRed: {
    backgroundColor: "red",
  },
  bgYello: {
    backgroundColor: "yellow",
  },
  buttonText: {
    color: "white",
  },
});
