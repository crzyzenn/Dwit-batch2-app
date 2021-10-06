import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import AppTabs from "../navigations/AppTabs";
import AuthStack from "../navigations/AuthStack";

const MainApp = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {loggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainApp;
