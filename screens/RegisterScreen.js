// User registration form
// Firstname
// Lastname
// email
// Mobile number
// password
// confirm password

// Exercise:
// Trigger validation error if password and confirmPassword fields does not match...
import { Formik } from "formik";
import React from "react";
import { Button, Input } from "react-native-elements";
import * as Yup from "yup";
import Center from "../components/Center";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  mobileNo: Yup.string()
    .max(10, "Mobile number must be at most 10 digits")
    // .length(10)
    .required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});

const RegisterScreen = () => {
  return (
    <Center>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(val) => console.log(val)}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          errors,
          touched,
          handleBlur,
          values,
        }) => {
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
              />
            </>
          );
        }}
      </Formik>
    </Center>
  );
};

export default RegisterScreen;
