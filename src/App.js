import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router/Router";
import CartContext from "./Components/Context/CartContext";

function App() {
  return (
    <div>
      <CartContext.Provider>
        <Router />
      </CartContext.Provider>
    </div>
  );
}
export default App;
