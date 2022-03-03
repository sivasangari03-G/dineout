import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { store_ } from "./Redux/store";
import reportWebVitals from "./reportWebVitals";
import { NavbarContextProvider } from "./contexts/NavbarContext";
import { BrowserRouter } from "react-router-dom";
import { RestaurantNeatYouContextProvider } from "./contexts/RestaurantNeatYouContext";
import { LogInContextProvider } from "./contexts/LogInContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LogInContextProvider>
        <NavbarContextProvider>
          <RestaurantNeatYouContextProvider>
            <Provider store={store_}>
              <Provider store={store}>
                <App />
              </Provider>
            </Provider>
          </RestaurantNeatYouContextProvider>
        </NavbarContextProvider>
      </LogInContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
