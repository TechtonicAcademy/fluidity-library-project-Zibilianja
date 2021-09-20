import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Bookshelf from './pages/Bookshelf';
import Header from './components/Header';
import Home from './pages/Home';
import Addbook from "./pages/Addbook";
import Bookdetails from "./pages/Bookdetails"
import Editbook from "./pages/Editbook"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route path="/addbook">
            <Addbook />
          </Route>
          <Route path="/editbook">
            <Editbook />
          </Route>
          <Route path="/bookdetails">
            <Bookdetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
