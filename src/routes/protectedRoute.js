import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Layout from "../containers/Layout"
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.token ? <Layout><Component {...props} /></Layout> : <Redirect to='/login' />
    }
  />
)
ProtectedRoute.propTypes = {
  component: PropTypes.element
}

export default ProtectedRoute
