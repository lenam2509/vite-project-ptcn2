import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "./pages/admin/AdminRoute";
import ClientRoute from "./pages/client/ClientRoute";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={ClientRoute} />
          <Route path="/admin" component={AdminRoute} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
