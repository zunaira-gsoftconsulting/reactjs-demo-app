import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.token ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
PublicRoutes.propTypes = {
  component: PropTypes.any,
};
export default PublicRoutes;
