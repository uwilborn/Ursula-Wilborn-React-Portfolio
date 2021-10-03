import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {About}
          </Route>
          <Route exact path="/contact">
            {Contact}
          </Route>
          <Route exact path="/portfolio">
            {Portfolio}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
