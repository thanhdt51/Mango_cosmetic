import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ProductPage from "./ProductPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
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
