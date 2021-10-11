import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import PublicRoute from './publicRoute'
import Home from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'

function Routes () {
  return (
    <Router>
    <Grid container >
      <CssBaseline />
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/signup' component={Signup} />
        </Switch>
    </Grid>
    </Router>
  )
}

export default Routes
