import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './App.css';


class App extends Component {
  render() {
    const arrayAnimals = this.props.animals;
    console.log(arrayAnimals);
    return (
      <div className="App">
      {arrayAnimals.map(function(itemPokemon) {
        return <PokemonList/>;
      })}
      </div>
    );
  }
}

export default App;
