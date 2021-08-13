import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../Components/ItemsListContainer";
import Navbar from "../Components/Navbar";

const Router = () => {
  <BrowserRouter>
    <Navbar />
    <ItemListContainer greeting="Este es nuestro ItemListContainer provisional que será nuestro catálogo" />
    <Switch>
      <Route path="/" component={ItemListContainer} />
      <Route path="/category/:id" component={ItemListContainer} />
      <Route path="/item/:id" component={ItemListContainer} />
    </Switch>
  </BrowserRouter>;
};

export default Router;
