import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
// import Beers from './Beers';
// import RandomBeer from './RandomBeer.js'
// import NewBeer from './NewBeer'


export default function Home() {
    return (
        <div>
          <ul>
                <li>
                    <Link to="/beers">All Beers</Link>
                </li>
                <li>
                    <Link to="/random-beer">Random Beer</Link>
                </li>
                <li>
                    <Link to="/new-beer">New Beer</Link>
                </li>
            </ul>
            
        </div>
    )
}
