import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native-elements";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Button
            title="Cart"
            onPress={() => {
              navigation.navigate("Cart");
            }}
          />
        ),
      }}
    >
      {/* Screens */}
      <Stack.Screen
        options={{
          title: "Home",
        }}
        name="HomeStack"
        component={HomeScreen}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
