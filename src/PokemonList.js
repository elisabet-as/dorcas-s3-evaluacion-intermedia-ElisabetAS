import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    return (
      <div className="list--pokemon">
        <Pokemon>
        <img src={this.props.url} alt="imagen de un pokemon"/>
        <h2 className="subtitles">{this.props.name}</h2>
        <ul className="skills">{this.props.types}</ul>
        </Pokemon>
      </div>
    );
  }
}

export default PokemonList;
