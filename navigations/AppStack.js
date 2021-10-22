import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Badge, Button, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import HomeScreen from "../screens/HomeScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import ProductCategoryScreen from "../screens/ProductCategoryScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createNativeStackNavigator();

const AppStack = ({ navigation }) => {
  const { items } = useSelector((state) => state.cart);
  console.log(items);
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
                containerStyle={{
                  position: "absolute",
                  top: -6,
                  right: -10,
                }}
                // Display whatever amount of items we have in cart:
                value={items.length}
                status="error"
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
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen
        options={{
          title: "Product of Category",
        }}
        name="ProductCategory"
        component={ProductCategoryScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
