import { useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { $axios } from "../lib/axios";
import { clearCart } from "../redux/slices/cartSlice";
import { myStyles } from "../styles/baseStyles";

const PaymentsScreen = ({ navigation: { navigate }, route }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const checkoutInfo = route.params;
  const {
    auth: { user },
    cart: { items },
  } = useSelector((store) => store);

  const totalPrice = items.reduce((acc, val) => acc + val.totalPrice, 0);

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const getSecretKeyFromStripe = async () => {
    setLoading(true);
    try {
      const response = await $axios.post("/stripe/create-payment-intent", {
        totalPrice: totalPrice * 100, // Convert the price to cents
      });
      return response.data.clientSecret;
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      // Get the secret key from server & stripe
      const clientSecret = await getSecretKeyFromStripe();

      // Initialize the payment sheet
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });

      if (error) {
        console.log(error);
        setLoading(false);
      } else {
        // If initialization was successfull...
        console.log("successful initialization");

        // Now we can present the payment sheet
        const { error } = await presentPaymentSheet({ clientSecret });
        if (error) {
          console.log("Payment failed");
          setLoading(false);
        } else {
          // At this point, payment has been successfull...
          // So, we can create the order..
          await handleCompleteOrder(1);
          console.log("Payment successful");
        }
      }
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const handleCompleteOrder = async (paymentType) => {
    setLoading(true);
    try {
      const response = await $axios.post("/orders", {
        checkoutInfo,
        items,
        paymentType,
        totalPrice,
        user,
      });

      console.log(response.data);
      // After the order has been completed..
      // Redirect to success screen...
      // Clear the cart...
      dispatch(clearCart());

      navigate("Success");
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={myStyles.container}>
      <Text>Choose your method of payment:</Text>

      <View>
        <Button
          title="Pay now"
          style={{ marginVertical: 10 }}
          onPress={handlePayment}
          loading={loading}
        />

        <Button
          title="Cash on delivery"
          onPress={() => handleCompleteOrder(2)}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default PaymentsScreen;
