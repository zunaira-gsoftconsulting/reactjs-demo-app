import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages";
import Login from "../../pages/Login";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
