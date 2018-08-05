import React, { Component, Fragment } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const {pokeImage, pokeName, pokeTypes} = this.props;
    return (
      <Fragment>
        <img className="pokemon--image" src={pokeImage} alt="imagen de un pokemon" />
        <h2 className="subtitles">{pokeName}</h2>
        <ul className="skills">
          {pokeTypes.map(function(type) {
            return (
              <li key={type} className="pokeSkills">
                {type}
              </li>
            )
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Pokemon;
