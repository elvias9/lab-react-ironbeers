import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class RandomBeer extends Component {

    state = {
        randomBeer: null
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                const data = response.data
                console.log(data);
                this.setState({
                    randomBeer: data[Math.floor(Math.random() * data.length)]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        if (this.state.randomBeer === null) {
            return <h3>Loading</h3>
        }
        return (
            <div>
            <header>
      <Link to="/">Home</Link>
      </header>
      <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} style={{width:'100px'}}/>
                <h3>{this.state.randomBeer.name}</h3>
                <p>{this.state.randomBeer.tagline}</p>
                <p><b>First brewed:</b> {this.state.randomBeer.first_brewed}</p>
                <p>Attenuation Level: {this.state.randomBeer.attenuation_level}</p>
                <p><strong>Description: </strong>{this.state.randomBeer.description}</p>
                <p><b>Contributed by: </b>{this.state.randomBeer.contributed_by}</p>
               
                <Link to="/beers">All Beers</Link>
                
            </div>
        )
    }
}

