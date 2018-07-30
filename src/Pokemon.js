import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const {pokeImage, pokeName, pokeTypes} = this.props;
    return (
      <div className="pokemon--target">
        <img src={pokeImage} alt="imagen de un pokemon"/>
        <h2 className="subtitles">{pokeName}</h2>
        <ul className="skills">
          {pokeTypes.map(function(type) {
            return (
              <li className="pokeSkills">
                {type}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Pokemon;
