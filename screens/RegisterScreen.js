import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Input } from "react-native-elements";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  mobileNo: Yup.string()
    .max(10, "Mobile number must be at most 10 digits")
    // .length(10)
    .required(),
  password: Yup.string().required(),

  // Trigger validation error if password and confirmPassword fields does not match...
  confirmPassword: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("password")],
      // Message
      "Password and confirm password fields does not match."
    ),
});

const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  // Snackbar.show({
  //   text: "Hello world",
  //   duration: Snackbar.LENGTH_LONG,
  // });
  const handleSubmit = async (formValues, { resetForm, setFieldError }) => {
    // Set the loading to true
    setLoading(true);

    // Prepare data for api
    const apiData = {
      ...formValues,
      name: `${formValues.firstName} ${formValues.lastName}`,
      mobile: formValues.mobileNo,
    };
    // Delete unncessary fields for the api
    delete apiData.mobileNo;
    delete apiData.firstName;
    delete apiData.lastName;

    try {
      // Make the api request with the prepared data
      // 200-299 status code
      // success codes
      await axios.post(
        "https://dwit-ecommerce.herokuapp.com/api/auth/register",
        apiData
      );

      // If successful, show the success message
      Alert.alert(
        "Successfully registered!",
        "Your registration was successful.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );

      // Reset the form after sucessful registration
      resetForm();
    } catch (error) {
      // If error, check errors
      if (error.response.status === 409) {
        // Alert.alert(
        //   "Alert",
        //   "The email you're trying to register with already exists!",
        //   [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        // );

        // Trigger validation error on email field
        setFieldError(
          "email",
          "The email you're trying to register with already exists!"
        );
      } else {
        Alert.alert(
          "Alert",
          "An unknown error was occurred. Please contact admin or try again later!",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      }
    } finally {
      // Finally, set the loading indicator off
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        // paddingHorizontal: 10,
        // paddingtop: 50,
        paddingTop: 30,
        paddingHorizontal: 10,
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, handleBlur }) => {
          return (
            <>
              <Input
                label="First Name"
                onChangeText={handleChange("firstName")}
                errorMessage={touched.firstName && errors.firstName}
                onBlur={handleBlur("firstName")}
              />
              <Input
                label="Last Name"
                onChangeText={handleChange("lastName")}
                errorMessage={touched.lastName && errors.lastName}
                onBlur={handleBlur("lastName")}
              />
              <Input
                placeholder="john@example.com"
                label="Email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                errorMessage={touched.email && errors.email}
                onBlur={handleBlur("email")}
              />
              <Input
                label="Mobile Number"
                keyboardType="phone-pad"
                onChangeText={handleChange("mobileNo")}
                errorMessage={touched.mobileNo && errors.mobileNo}
                onBlur={handleBlur("mobileNo")}
              />
              <Input
                placeholder="secret"
                secureTextEntry
                label="Password"
                onChangeText={handleChange("password")}
                errorMessage={touched.password && errors.password}
                onBlur={handleBlur("password")}
              />
              <Input
                placeholder="secret"
                secureTextEntry
                label="Confirm Password"
                onChangeText={handleChange("confirmPassword")}
                errorMessage={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
              />
              <Button
                title="Register"
                onPress={handleSubmit}
                containerStyle={{
                  width: "100%",
                  marginVertical: 10,
                }}
                loading={loading}
              />
              <Button
                title="Already a user? Login!"
                onPress={() => navigation.navigate("Login")}
                containerStyle={{
                  width: "100%",
                  marginVertical: 10,
                }}
                type="clear"
                loading={loading}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default RegisterScreen;
