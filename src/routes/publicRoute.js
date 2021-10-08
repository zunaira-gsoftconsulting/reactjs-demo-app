import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.token ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PublicRoutes;
