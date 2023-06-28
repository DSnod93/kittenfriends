import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
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
    const filteredKittens = this.state.kitten.filter((kitten) => {
      return kitten.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.kitten.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">KittenFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList kitten={filteredKittens} />
        </div>
      );
    }
  }
}

export default App;
