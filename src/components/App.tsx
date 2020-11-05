import React from "react";
import { Counter } from "features/counter/Counter";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Student from "../features/student/Student";
import Teacher from "../features/teacher/Teacher";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/teacher" component={Teacher} />
        {/*<Route exact path="/login" component={() => loginWithRedirect()} />*/}
      </Switch>
    </Router>
  );
}

export default App;
