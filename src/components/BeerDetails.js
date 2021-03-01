import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BeerDetails extends Component {

    state = {
        beer: null
    }

    componentDidMount() {
        const id = this.props.match.params.beerId;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        if (this.state.beer === null) {
            return <h3>Loading</h3>
        }
        return (
            <div>
            <header>
                <Link to="/">Home</Link>
            </header>
   
            
                <img src={this.state.beer.image_url} alt={this.state.beer.name} style={{width:'100px'}}/>
                <h3>{this.state.beer.name}</h3>
                <p>{this.state.beer.tagline}</p>
                <p><b>First brewed:</b> {this.state.beer.first_brewed}</p>
                <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
                <p><strong>Description: </strong>{this.state.beer.description}</p>
                <p><b>Contributed by: </b>{this.state.beer.contributed_by}</p>
               
                <Link to="/beers">All Beers</Link>
            </div>
        )
    }
}
