import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import Checkout from "./Checkout";
import Receipt from "./Receipt";
import ProductDetail from "./ProductDetail";

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
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/:category" component={ProductPage} />
        <Route path="/:category/:subCategory" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
