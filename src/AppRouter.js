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
import Game from "./components/Game";

const AppRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Router>
      <Switch>
        {user && <Redirect from={"/start"} to={"/games"} />}
        <Route exact path="/">
          <Redirect to={"/games"} />
        </Route>
        <Route exact path="/start">
          <LoginPanel />
        </Route>
        {user ? (
          <>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/games/:id">
              <Game />
            </Route>
            <Route exact path="/search">
              <SearchView />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <Redirect to={"/start"} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
