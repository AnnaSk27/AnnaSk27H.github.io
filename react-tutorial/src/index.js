import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Provider } from "react-redux";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import store from "./store";

import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

