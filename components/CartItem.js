import React from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Image } from "react-native-elements";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../redux/slices/cartSlice";
import { myStyles } from "../styles/baseStyles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
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
          width: "40%",
        }}
      >
        <Image
          source={{
            uri: item.image,
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
        <Button
          icon={<Icon name="delete" color="tomato" />}
          type="clear"
          onPress={() => {
            // Show confirmation dialog to ensure deletion process.
            Alert.alert(`${item.name} will be deleted!`, "Are you sure?", [
              {
                text: "Yes",
                // If use presses yes:
                onPress: () => {
                  dispatch(deleteItem(item.id));
                  console.log("Safe to delete");
                },
              },
              {
                text: "Cancel",
              },
            ]);
          }}
        />
        <Button title="+" onPress={() => dispatch(increaseQuantity(item.id))} />
        <Text
          style={{
            marginHorizontal: 5,
          }}
        >
          {item.quantity}
        </Text>
        <Button title="-" onPress={() => dispatch(decreaseQuantity(item.id))} />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
