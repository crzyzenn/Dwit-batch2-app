import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";
import { myStyles } from "../styles/baseStyles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetailScreen = ({ route }) => {
  const state = useSelector((state) => state.cart);
  console.log(state);
  const dispatch = useDispatch();
  const product = route.params;

  // On Add to cart button press::
  const handleAddToCart = () => {
    const productToAdd = {
      id: Math.random(),
      name: product.name,
      pricePerItem: product.price,
      totalPrice: product.price,
      quantity: 1,
      image: product.image,
    };

    dispatch(addToCart(productToAdd));

    // Notify the user that the product has been added
    Alert.alert("Item added successfully", "");
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: product.image,
        }}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 300,
        }}
      />

      <View style={styles.textContainer}>
        <Text style={[myStyles.title, styles.title]}>{product.name}</Text>
        <Button
          title="Add to cart"
          style={styles.button}
          icon={
            <Ionicons
              style={{
                marginRight: 10,
              }}
              name="cart-outline"
              size={25}
              color="white"
            />
          }
          onPress={handleAddToCart}
          iconPosition="left"
        />
        <Text>{product.description}</Text>
        <Text style={myStyles.price}>${product.price}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
  },
  title: { fontSize: 25 },
  button: {
    marginVertical: 20,
  },
});

export default ProductDetailScreen;
