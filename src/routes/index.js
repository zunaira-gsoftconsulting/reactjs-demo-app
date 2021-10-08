import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";
import Home from "../pages";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default Routes;
