import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Layout from "./Layout";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Layout isSideBar={loggedIn}>
        <Switch>
          <Route path="/Dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/Account">
            {loggedIn ? <Account /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {loggedIn ? (
              <Redirect to="/Account" />
            ) : (
              <Form parentCallback={callbackFunction} />
            )}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
