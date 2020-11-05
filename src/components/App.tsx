import React from "react";
import { Counter } from "features/counter/Counter";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Student from "../features/student/Student";
import Teacher from "../features/teacher/Teacher";
import { Home } from "./Home";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navbar } from "./Navbar";

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

  return (
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <Navbar />
        <Switch>
          {/* TODO: check if need to wrap auth0 login page. */}
          <Route exact path="/login" />
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/teacher" component={Teacher} />
        </Switch>
      </Auth0Provider>
    </Router>
  );
}

export default App;
