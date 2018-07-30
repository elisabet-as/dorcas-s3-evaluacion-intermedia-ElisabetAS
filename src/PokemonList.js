import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const {poke} = this.props;
    console.log(poke);
    return (
      <ul className="list--pokemon">
      {poke.map(function(itemPokemon) {
        return <li className="eachPokemon">
        <Pokemon
          pokeImage = {poke.url}
          pokeName = {poke.name}
          pokeTypes = {poke.types}
        />
        </li>
      })}
      </ul>
    );
  }
}

export default PokemonList;
