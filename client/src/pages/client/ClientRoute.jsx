import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "../../components/Navbar";
import Products from "./Products";
import Login from "./Login";
import Footer from "../../components/Footer";

export default function ClientRoute() {
  return (
    <Router>
      <Navbar />
      <section style={{ minHeight: "100vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/login" exact component={Login} />

        </Switch>
      </section>
      <Footer />
    </Router>
  );
}
