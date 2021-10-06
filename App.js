import React from "react";
import { Provider } from "react-redux";
import MainApp from "./components/MainApp";
import { store } from "./redux/store";

// User login navigations
// After log in
// Show AppTabs

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
