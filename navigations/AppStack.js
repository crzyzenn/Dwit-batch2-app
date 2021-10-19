import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Badge, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

const AppStack = ({ navigation }) => {
  const { items } = useSelector((state) => state.cart);
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          // <Button
          //   title="Cart"
          //   onPress={() => {
          //     navigation.navigate("Cart");
          //   }}
          // />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Icon name="cart-sharp" type="ionicon" />
            {items.length > 0 && (
              <Badge
                value={items.length}
                containerStyle={{
                  position: "absolute",
                  top: -5,
                  right: -10,
                }}
                badgeStyle={{
                  backgroundColor: "tomato",
                }}
              />
            )}
          </TouchableOpacity>
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
