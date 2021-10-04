import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppTabs from "./navigations/AppTabs";
import AuthStack from "./navigations/AuthStack";

// User login navigations
// After log in
// Show AppTabs

const App = () => {
  const loggedIn = false;
  return (
    <NavigationContainer>
      {loggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
