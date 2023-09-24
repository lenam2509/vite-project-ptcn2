import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Products from "./Products";
import Bills from "./Bills";
import Users from "./Users";

export default function AdminRoute() {
  return (
    <Router>
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "1rem", width: "100%" }}>
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/products" exact component={Products} />
            <Route path="/admin/bills" exact component={Bills} />
            <Route path="/admin/users" exact component={Users} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
