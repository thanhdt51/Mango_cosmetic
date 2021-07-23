import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import Checkout from "./Checkout";
import Receipt from "./Receipt";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/receipt">
          <Receipt />
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
