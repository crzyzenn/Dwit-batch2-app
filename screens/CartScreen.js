import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { myStyles } from "../styles/baseStyles";
import Center from "../components/Center";

// Image, product name, total price, quantity, quantity increase / decrease buttons
// Array.reduce - to get the total price of all items
const CartScreen = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    // Main container
    <View style={styles.container}>
      {/* If no items in cart, show message that there's nothing in it */}
      {/* Else, show the items and price summary sections. */}
      {items.length === 0 ? (
        <Center>
          <Text>Your cart looks empty. Add items and come back here.</Text>
        </Center>
      ) : (
        <>
          {/* Cart item container -> scrollable */}
          <ScrollView style={styles.scrollContainer}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ScrollView>

          {/* Price summary container */}
          <View style={styles.totalPriceContainer}>
            <Text style={myStyles.title}>Total Price</Text>
            <Text
              style={[
                myStyles.price,
                {
                  marginVertical: 0,
                },
              ]}
            >
              {/* Calculate the total price */}$
              {items.reduce((acc, val) => acc + val.totalPrice, 0)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
  },
  totalPriceContainer: {
    // backgroundColor: "",
  },
});
