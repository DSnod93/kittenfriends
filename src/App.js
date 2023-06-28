import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { kitten } from "./kitten";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitten: kitten,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredKittens = this.state.kitten.filter((kitten) => {
        return kitten.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
    return (
      <div className="tc">
        <h1 className="f1">KittenFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList kitten={filteredKittens} />
      </div>
    );
  }
}

export default App;
