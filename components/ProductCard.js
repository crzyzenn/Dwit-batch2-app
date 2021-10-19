import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { myStyles } from "../styles/baseStyles";
import CategoryLabel from "./CategoryLabel";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("ProductDetails", product);
      }}
    >
      <Image
        source={{
          uri: product.image,
        }}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <CategoryLabel label={product.category.name} />
        <Text numberOfLines={2}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    // padding: 10,
    width: "30%",
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    overflow: "hidden",
  },
  textContainer: {
    padding: 10,
  },
  title: myStyles.title,
  price: myStyles.price,
});
