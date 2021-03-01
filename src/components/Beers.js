import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Beers extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response);
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
         console.log(this.state.beers)
         if (this.state.beers.length === 0) return <h3>Loading...</h3>
        let listOfBeers = this.state.beers.map(beer => {
            return <ul key={beer._id}>
                <li><img src={beer.image_url} alt={beer.name} style={{width:'100px'}}/></li>
                <li><h3>{beer.name}</h3></li>
                <li>{beer.tagline}</li>
                <li>{beer.contributed_by}</li>
                <button><Link to={`/beers/${beer._id}`}>Check Details</Link></button>
            </ul>
        })
        return (
            <div>
               <header>
      <Link to="/">Home</Link>
      </header>
      <div>
            {listOfBeers}

      </div>    
            </div>
        )
    }
}
