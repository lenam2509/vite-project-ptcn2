import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "./pages/admin/AdminRoute";
import ClientRoute from "./pages/client/ClientRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminRoute} />
          <Route path="/" component={ClientRoute} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
