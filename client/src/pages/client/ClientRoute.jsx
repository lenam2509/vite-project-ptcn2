import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "../../components/Navbar";
import Products from "./Products";
import Login from "./Login";
import Footer from "../../components/Footer";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";

export default function ClientRoute() {
  return (
    <Router>
      <Navbar />
      <section style={{ minHeight: "100vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
}
