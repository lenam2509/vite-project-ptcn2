import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Products from "./Products";
import Bills from "./Bills";
import Users from "./Users";
import Cate from "./Cate";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminRoute() {
  const { data } = useSelector((state) => state.auth);
  const history = useHistory();

  console.log(data);

  useEffect(() => {
    if (!data.role || data.role !== "admin") {
      history.push("/");
      toast.error("Bạn không có quyền truy cập vào trang này!");
    }
  }, [data.role, history]);

  return (
    <Router>
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "1rem", width: "100%" }}>
          <Switch>
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/products" exact component={Products} />
            <Route path="/admin/bills" exact component={Bills} />
            <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/cate" exact component={Cate} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
