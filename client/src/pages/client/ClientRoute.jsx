import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "../../components/Navbar";
import Products from "./Products";
import Footer from "../../components/Footer";

export default function ClientRoute() {
  return (
    <Router>
      <Navbar />
      <section style={{ minHeight: "100vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
}
