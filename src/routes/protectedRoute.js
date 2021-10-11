import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.token ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
)
ProtectedRoute.propTypes = {
  component: PropTypes.element
}

export default ProtectedRoute
