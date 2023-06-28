import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitten: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ kitten: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { kitten, searchfield } = this.state;
    const filteredKittens = kitten.filter((kitten) => {
      return kitten.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !kitten.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">KittenFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList kitten={filteredKittens} />
        </Scroll>
      </div>
    );
  }
}

export default App;
