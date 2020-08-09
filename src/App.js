import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
    response.json()).then(users => this.setState({monsters: users}));

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  };

  render() {
    const {monsters,searchField } = this.state;
     //const monsters=this.state.mosnters
     // const searchField=this.state.searchField destruction

     const filteredMonsters= monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase()
      ));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
         placeholder='seach monsters'
         handleChange = {this.handleChange}
         />
          <CardList monsters = {filteredMonsters}/>

      </div>
    );
  }
}

export default App;
