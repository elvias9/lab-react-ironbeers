import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {

    state= {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
    
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
        .then((response) => {
            console.log(response)
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            })
            
        })
    }


    render() {
        return (
            <div>
                 <header>
      <Link to="/">Home</Link>
      </header>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <label htmlFor="tagline">Tagline:</label>
                <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}></input>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>
                <label htmlFor="first_brewed">First Brewed:</label>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}></input>
                <label htmlFor="brewers_tips">Brewers Tips:</label>
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}></input>
                <label htmlFor="attenuation_level">Attenuation Lever:</label>
                <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}></input>
                <label htmlFor="contributed_by">Contributed by:</label>
                <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}></input>
                <button type="submit">Add a New Beer</button>
            </form>
            </div>
        )
    }
}
