import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./components/contexts/user.contexts";

import { ProductsProvider } from "./components/contexts/products.contexts";

import "./index.scss";
import App from "./App";
import { CartProvider } from "./components/contexts/cart.contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>          
        </ProductsProvider>        
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
