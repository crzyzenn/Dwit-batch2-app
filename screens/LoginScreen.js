import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Center from "../components/Center";
import { login } from "../redux/slices/authSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      // Login the user
      const response = await axios.post(
        "https://dwit-ecommerce.herokuapp.com/api/ph-auth/login",
        values
      );

      // Get the user details with the logged in accessToken
      const user = await getLoggedInUser(response.data.accessToken);

      // Save the user info to redux store
      dispatch(login({ user, token: response.data.accessToken }));
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const getLoggedInUser = async (token) => {
    try {
      const response = await axios.get(
        "https://dwit-ecommerce.herokuapp.com/api/ph-auth/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <Center>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawaxY7J-JqyVNpVrm6O3o9DE6yhmu-gad3Q&usqp=CAU",
        }}
        style={{
          width: 200,
          height: 200,
        }}
        containerStyle={{
          marginBottom: 20,
        }}
        PlaceholderContent={<ActivityIndicator size="large" />}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, handleBlur }) => {
          return (
            <>
              {/* <Text>{JSON.stringify(values, null, 6)}</Text>
              <Text>{JSON.stringify(errors, null, 6)}</Text>
              <Text>{JSON.stringify(touched, null, 6)}</Text> */}
              <Input
                placeholder="john@example.com"
                label="Email"
                onChangeText={handleChange("email")}
                errorMessage={touched.email && errors.email}
                onBlur={handleBlur("email")}
                autoCapitalize="none"
              />
              <Input
                placeholder="secret"
                secureTextEntry
                label="Password"
                onChangeText={handleChange("password")}
                errorMessage={touched.password && errors.password}
                onBlur={handleBlur("password")}
              />
              <Button
                title="Login"
                loading={loading}
                onPress={handleSubmit}
                containerStyle={{
                  width: "100%",
                  marginVertical: 10,
                }}
              />
              <Button
                title="Not a user? Register now."
                type="clear"
                onPress={() => navigation.navigate("Register")}
              />
            </>
          );
        }}
      </Formik>
    </Center>
  );
};

export default LoginScreen;
