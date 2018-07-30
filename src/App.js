import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './App.css';


class App extends Component {
  render() {
    const {animals} = this.props;
    console.log(animals);
    return (
      <div className= "MyPage">
      <h1 className="title--page">My PoKeDeX</h1>
      <PokemonList poke= {animals}/>
      </div>
    );
  }
}

export default App;
