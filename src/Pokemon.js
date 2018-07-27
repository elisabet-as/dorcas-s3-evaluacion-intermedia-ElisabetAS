import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon--target">
        <img src={this.props.url} alt="imagen de un pokemon"/>
        <h2 className="subtitles">{this.props.name}</h2>
        <ul className="skills">{this.props.types}</ul>
      </div>
    );
  }
}

export default Pokemon;
