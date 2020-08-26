import { AppRegistry } from "react-native";
import App from "./App";
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";

import store from "./store/store";

// CONNECT TO STATE
// Header = connect(state => ({ data: state.data }))(
//   Header
// );

// NON REDUX SETUP HERE
// AppRegistry.registerComponent("App", () => App);

// AppRegistry.runApplication("App", {
//   rootTag: document.getElementById("root")
// });

// ----

// REDUX SETUP HERE BELOW

function AppRedux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppRedux />, rootElement);
