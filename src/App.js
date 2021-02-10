
import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { render } from '@testing-library/react';




export default class PersonList extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    pokemons: [],
    name:""
  }
}


  componentDidMount() {
    this.axxios();
  }
  axxios(){
    const numero=Math.round(Math.random()*893);
      axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then(res => {
        const pokemons = res.data.sprites;
        let name=numero;
        if(typeof(res.data.forms[0])!=="undefined"){
        this.setState({
          name:res.data.forms[0].name,
          pokemons:res.data.sprites});
        }
      })
  } 
  render(){
  return(
      <div class="App shadow">
      <div class=" d-flex justify-content-center ">
        <div class="card m-5 w-25 carta text-center shadow" >
          <img src={this.state.pokemons.front_default} class="card-img-top-left imagenpokemon mt-3" alt="img"></img>
          <div class="card-body border">
            <h5 class="card-title">{this.state.name}</h5>
            
            <a class="d-block" href={`https://en.wikipedia.org/wiki/${this.state.name}`} >More info about {this.state.name} on Wikipedia</a>
            <button onClick={this.axxios.bind(this)} class="btn btn-primary mt-5">New <span class="pokemon">Pokemon!</span></button>
          </div>
        </div>
      <div>
          
          
        </div>
        
      
      </div>
      <footer >
        <p>Pokecards! Lucio Colombo //  2020 Design // Powered by PokeApi</p>  
      </footer>
      </div>
    )
  }
}


