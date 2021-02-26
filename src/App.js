import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer';


function App() {
  return (
    <div className="App">
      {/* <header>
      <Link to="/home">Home</Link>
      </header> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />


      </Switch>
     

    </div>
  );
}

export default App;


      