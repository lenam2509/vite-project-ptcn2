import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Topbar from "../../components/Topbar";

export default function Admin() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/admin" component={Dashboard} />
      </Switch>
    </Router>
  );
}
