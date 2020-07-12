import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Games from "./views/Games";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={"/games"} />
        </Route>
        <Route exact path="/games">
          <Games />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
