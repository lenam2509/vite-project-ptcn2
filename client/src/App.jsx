import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Client from "./pages/client/Client";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Client} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
