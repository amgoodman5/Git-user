import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Search
            username={this.state.username}
            onSearch={username => {
              console.log('App.onSearch', username)
              this.setState((prevState, props) => {
                let s = {...prevState, username }
                console.log('App.onSearch.setState()', s)
                return s;
              });
            }}
          />
          <Card username={this.state.username} />
        </div>
      </div>
    );
  }
}

export default App;
