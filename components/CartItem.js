import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";
import { myStyles } from "../styles/baseStyles";

const CartItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      {/* Product details area */}
      <View
        style={{
          flexDirection: "row",
          width: "50%",
        }}
      >
        <Image
          source={{
            uri: "https://source.unsplash.com/random",
          }}
          style={{
            width: 100,
            height: 100,
            marginRight: 10,
          }}
        />
        <View>
          <Text style={[myStyles.title]} numberOfLines={3}>
            {item.name}
          </Text>
          <Text
            style={[
              myStyles.price,
              {
                marginVertical: 0,
              },
            ]}
          >
            ${item.totalPrice}
          </Text>
        </View>
      </View>

      {/* Quantity area */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button title="+" />
        <Text
          style={{
            marginHorizontal: 5,
          }}
        >
          {item.quantity}
        </Text>
        <Button title="-" />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
