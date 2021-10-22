import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { useSelector } from "react-redux";
import { myStyles } from "../styles/baseStyles";
import * as Yup from "yup";

const validationSchema = Yup.object({
  address: Yup.string().required(),
  contact: Yup.string().max(10, "Please check your phone number.").required(),
});

const CheckoutScreen = ({ navigation: { navigate } }) => {
  const items = useSelector((store) => store.cart.items);
  const totalPrice = items.reduce((acc, val) => acc + val.totalPrice, 0);
  return (
    <View style={myStyles.container}>
      <View
        style={{
          marginBottom: 10,
        }}
      >
        <Text style={myStyles.title}>Total Price: ${totalPrice}</Text>
      </View>

      <Formik
        initialValues={{
          address: "",
          contact: "",
        }}
        onSubmit={(submissionData) => {
          // In react -> to send data from one page to another...
          // push(`/payments?submissionData=${JSON.stringify(submissionData)}`);

          // in payments screen
          // useHistory(); => query: {submissionData: '......'}
          // const {query} = useHistory()
          // const data = JSON.parse(query.submissionData)

          // In react native
          navigate("Payments", submissionData);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, touched, errors }) => {
          return (
            <>
              <Input
                label="Shipping address"
                placeholder="Eg: Hattisar ,Kathmandu"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                errorMessage={touched.address && errors.address}
              />
              <Input
                label="Mobile Number"
                placeholder="98-xxxxxxxx"
                onChangeText={handleChange("contact")}
                onBlur={handleBlur("contact")}
                errorMessage={touched.contact && errors.contact}
              />
              <Button title="Proceed to Payment" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
