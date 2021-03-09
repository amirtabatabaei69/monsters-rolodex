import "./App.css";
import { Component } from "react";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/Search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      term: "",
    };
  }
  // termChange(term) {
  //   this.setState({ term: term });
  // }
  termChange(e) {
    this.setState({ term: e.target.value });
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }))
      .catch((err) => console.log(err, "error"));
  }

  render() {
    const { monsters, term } = this.state;

    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(term.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          type="search"
          placeholder="search monsterss"
          // handler={(e) => this.termChange(e.target.value)}
          handler={this.termChange.bind(this)}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
