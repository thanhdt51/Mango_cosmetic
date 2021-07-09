import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Makeup from "./Makeup";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/makeup">
          <Makeup />
        </Route>
        {/* <Route path="/skincare">
          <Skincare />
        </Route>
        <Route path="/bodycare">
          <Bodycare />
        </Route>
        <Route path="/haircare">
          <Haircare />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
