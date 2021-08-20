import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
import ItemListContainer from "../Components/ItemsListContainer";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/item/:itemId" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
