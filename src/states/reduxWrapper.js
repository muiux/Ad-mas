import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

const ReduxWrapper = ({ children }) => {
  return <Provider store={configureStore()}>{children}</Provider>;
};

export default ReduxWrapper;
