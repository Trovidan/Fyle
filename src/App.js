import "./App.css";
import React from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { app_routes } from "./utils/routes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      verified: false,
    };
    this.renderRoutes = this.renderRoutes.bind(this);
  }

  //render routes for application
  renderRoutes() {
    let routes = (
      <Switch>
        {app_routes.map((route, index) => (
          <ProtectedRoute {...route} key={index} auth={this.state.auth} />
        ))}
      </Switch>
    );
    return routes;
  }

  render() {
    return (
      <div className="App">
        <Router>{this.renderRoutes()}</Router>
      </div>
    );
  }
}

//Function to render routes conditionaly
function ProtectedRoute({
  path,
  exact,
  auth,
  onLogged,
  Component,
  fallback,
  universal,
}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        let logCondition = onLogged ? auth : !auth;
        if (logCondition || universal) {
          return <Component {...props} />;
        } else {
          return <Redirect to={fallback} />;
        }
      }}
    />
  );
}
