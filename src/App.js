import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  LogIn,
  Profile,
  Regulations,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/login" exact component={() => <LogIn />} />
            <Route path="/profile" exact component={() => <Profile />} />
            <Route
              path="/Regulations"
              exact
              component={() => <Regulations />}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
