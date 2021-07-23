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
  Maps,
  NissanLeaf,
  NewSale
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="App" style={{'padding-bottom': '60px'}}>
        <Router>
          <Navigation />
          <Switch >
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/login" exact component={() => <LogIn />} />
            <Route path="/profile" exact component={() => <Profile />} />
            <Route path="/maps" exact component={() => <Maps />} />
            <Route path="/nissanleaf" exact component={() => <NissanLeaf />} />
            <Route path="/newsale" exact component={() => <NewSale />} />
            <Route
              path="/Regulations"
              exact
              component={() => <Regulations />}
            />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
