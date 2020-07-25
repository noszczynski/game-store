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
import LoginPanel from "./views/LoginPanel";

const AppRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Router>
      <Switch>
        {user && <Redirect from={"/login"} to={"/games"} />}
        <Route exact path="/">
          <Redirect to={"/games"} />
        </Route>
        <Route exact path="/login">
          <LoginPanel />
        </Route>
        {user ? (
          <>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/search">
              <SearchView />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <Redirect to={"/login"} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
