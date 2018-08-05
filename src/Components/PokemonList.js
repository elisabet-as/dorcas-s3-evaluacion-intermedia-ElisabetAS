import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './PokemonList.css';

class PokemonList extends Component {
  render() {
    const {poke} = this.props;
    return (
      <ul className="list--pokemon">
        {poke.map(function(itemPokemon) {
          return (
            <li key={itemPokemon.id} className="eachPokemon">
              <Pokemon
                pokeImage={itemPokemon.url}
                pokeName={itemPokemon.name}
                pokeTypes={itemPokemon.types}
              />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default PokemonList;
