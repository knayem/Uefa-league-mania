import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import NoMatch from './NoMatch/NoMatch';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {


  return (
    <div className="App">
      <Header></Header>


      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route exact path="/home">
      <Home/>
      </Route> */}
          <Route path="/league/:leagueId">
            <LeagueDetails />

          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>

      </Router>





    </div>

  );

}

export default App;
