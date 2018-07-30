import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const {poke} = this.props;
    console.log(poke);
    return (
      <ul className="list--pokemon">
      {poke.map(function(itemPokemon) {
        return (
        <li className="eachPokemon">
        <Pokemon
          pokeImage = {itemPokemon.url}
          pokeName = {itemPokemon.name}
          pokeTypes = {itemPokemon.types}
        />
        </li>
      )})}
      </ul>
    );
  }
}

export default PokemonList;
