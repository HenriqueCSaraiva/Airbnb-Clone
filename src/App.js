import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/home/Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import SearchPage from "./Components/searchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router >

        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />

      </Router>
    </div>


  );
}

export default App;
