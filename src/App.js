import React from "react";
import NavBar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemsListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />{" "}
      <ItemListContainer greeting="Este es nuestro ItemListContainer provisional que será nuestro catálogo" />
    </div>
  );
}
export default App;
