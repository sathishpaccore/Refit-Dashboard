import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";
// import store from "./v2/Redux/index";


const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
