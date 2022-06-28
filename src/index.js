import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import { AppProvider } from "./context";
const Index = () => {
  return (
    <>
      <AppProvider>
        <App />
      </AppProvider>
    </>
  );
};
ReactDOM.render(<Index></Index>, document.getElementById("root"));
