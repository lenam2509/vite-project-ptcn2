import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "./pages/admin/AdminRoute";
import "react-multi-carousel/lib/styles.css";
import ClientRoute from "./pages/client/ClientRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}`}>
        <Router>
          <Switch>
            <Route path="/admin" component={AdminRoute} />
            <Route path="/" component={ClientRoute} />
          </Switch>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
