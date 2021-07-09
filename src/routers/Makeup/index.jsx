import React from "react";

import { useRouteMatch, Switch, Route } from "react-router-dom";

import Makeup from "./Makeup";
import SubCategory from "./SubCategory";

function MakeupRouter() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Makeup />
      </Route>
      <Route path={`${path}/:subCategory`}>
        <SubCategory />
      </Route>
    </Switch>
  );
}

export default MakeupRouter;
