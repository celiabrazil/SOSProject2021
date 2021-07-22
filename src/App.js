
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Profile, Maps} from "./components";

function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/Profile" exact component={() => <Profile />} />
          <Route path="/Maps" exact component={() => <Maps />} />
        </Switch>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;
