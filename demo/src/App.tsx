import React from "react";
import "./reset.less";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./router";
import { RouteWithSubRoutes } from "./assets/common";
import { RouteInterface } from "./assets/interface/router.config";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route: RouteInterface, index: number) => {
            return RouteWithSubRoutes(route, index);
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
