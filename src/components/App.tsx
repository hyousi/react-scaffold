import React from "react";
import { Counter } from "features/counter/Counter";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Student from "../features/student/Student";
import Teacher from "../features/teacher/Teacher";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./Loading";
import { Login } from "./Login";

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();
  // TODO: local storage
  const roles: string[] = isAuthenticated
    ? user["http://demozero.net"].roles || []
    : [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        {/* TODO: should we use embedded login page? */}
        <Route exact path="/login" component={Login} />
        {/* FIXME: user can access following routes without authenticate! */}
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/student">
          {roles.includes("student") ? <Student /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/teacher" component={Teacher} />
      </Switch>
    </Router>
  );
}

export default App;
