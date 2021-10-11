import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";
import { myStyles } from "../styles/baseStyles";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route }) => {
  const product = route.params;
  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://source.unsplash.com/random",
        }}
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
