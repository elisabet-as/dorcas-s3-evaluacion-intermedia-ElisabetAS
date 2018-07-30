import React, { Component, Fragment } from 'react';
import PokemonList from './PokemonList';
import './App.css';


class App extends Component {
  render() {
    const {animals} = this.props;
    console.log(animals);
    return (
      <Fragment>
      <header className= "myPage">
      <h1 className="title--page">My Pokedex</h1>
      </header>
      <main>
      <PokemonList poke= {animals}/>
      </main>
      </Fragment>
    );
  }
}

export default App;
