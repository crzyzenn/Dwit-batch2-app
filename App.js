import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppStack from "./navigations/AppStack";
import AppTabs from "./navigations/AppTabs";

const App = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default App;
