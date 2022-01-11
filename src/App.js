import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/">
                {Landing}
              </Route>
              <Route exact path="/about">
                {About}
              </Route>
              <Route exact path="/contact">
                {Contact}
              </Route>
              <Route exact path="/portfolio">
                {Portfolio}
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
