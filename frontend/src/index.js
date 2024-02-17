import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TodolistsContextProvider } from "./context/TodolistContext";

ReactDOM.render(
  <React.StrictMode>
    <TodolistsContextProvider>
      <App />
    </TodolistsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
