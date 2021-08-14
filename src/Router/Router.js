import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
import ItemListContainer from "../Components/ItemsListContainer";
import Navbar from "../Components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/*    <ItemListContainer greeting="Este es nuestro ItemListContainer provisional que será nuestro catálogo" /> */}
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
