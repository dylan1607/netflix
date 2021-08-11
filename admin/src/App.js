import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/User";
import Register from "./pages/Register";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/products">
            <ProductList /> 
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
