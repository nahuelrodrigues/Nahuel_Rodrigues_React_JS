import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router/Router";
import { CartProvider } from "./Components/Context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}
export default App;
