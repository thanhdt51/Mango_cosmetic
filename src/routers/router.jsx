import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import Checkout from "./Checkout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route path="/cart/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/:category">
          <ProductPage />
        </Route>
        <Route path="/:category/:subCategory">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
