import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/storeIndex";
import { Provider } from "react-redux";
import axios from 'axios';
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderHistory from "./auth0-provider-history";
import Toaster from './Toaster'

axios.defaults.baseURL = "https://pf-henry-production-4976.up.railway.app/";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0ProviderHistory>
          <App />
        </Auth0ProviderHistory>
      </Provider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
