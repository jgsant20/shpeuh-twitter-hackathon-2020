
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.less";
import routes from "./util/routes";
import AuthProvider, { AuthContext } from './AuthProvider';
import SignIn from "./components/pages/covid19";
import ProtectedRoute from "./util/ProtectedRoute";

function App() {
  const user = useContext(AuthContext);
  return (
    <>
      <div className="app">
        <AuthProvider>
          <Router>
            <Switch>
              <Route path="/login" exact component={SignIn} />
              {routes.map((r) => <ProtectedRoute path={r.path} exact component={r.component} user={user} />)}
              <Redirect to="/not-found" />
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
