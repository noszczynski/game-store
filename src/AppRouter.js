import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Games from "./views/Games";
import SearchView from "./views/SearchView";
import Profile from "./views/Profile";

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
        <Route exact path="/search">
          <SearchView />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
