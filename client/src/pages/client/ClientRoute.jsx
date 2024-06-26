import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "../../components/Navbar";
import Products from "./Products";
import Login from "./Login";
import Footer from "../../components/Footer";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";
import Cart from "./Cart";
import ScrollTop from "../../components/ScrollTop";
import About from "./About";
import Contact from "./Contact";
import UserInfo from "./UserInfo";
import Paysuccess from "./Paysuccess";

export default function ClientRoute() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <section style={{ minHeight: "1vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/userinfo" component={UserInfo} />
          <Route path="/paysuccess" component={Paysuccess} />
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
}
