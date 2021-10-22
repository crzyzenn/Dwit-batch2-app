import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";
import { Provider } from "react-redux";
import MainApp from "./components/MainApp";
import { store } from "./redux/store";

// User login navigations
// After log in
// Show AppTabs

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51J5PCLHSkxfngDrUqtTztzDp33xG21gGY1hczEiexc3JAztaWWrH2xSEDWJhkP90eQ4PTzYJ39FMC5odm5RXW2BO00csoSKUPM">
      <Provider store={store}>
        <MainApp />
      </Provider>
    </StripeProvider>
  );
};

export default App;
