import { Formik } from "formik";
import React from "react";
import { ActivityIndicator } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import * as Yup from "yup";
import Center from "../components/Center";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginScreen = ({ navigation }) => {
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
        onSubmit={(val) => console.log(val)}
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
