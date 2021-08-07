import "./App.scss";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        {/* If already login, cannot access page login and landing, direct to homepage */}
        <Route path="/landing">
          {!user ? <Landing /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>

        {/* If not login, cannot access homepage, direct to landing */}
        {user ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        ) : (
          <Redirect to="/landing" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
