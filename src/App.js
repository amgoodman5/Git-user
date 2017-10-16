import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Search from './Search';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.findUser = this.findUser.bind(this);
  }

  findUser(username) {
    console.log('App.findUser:', username)
    if (username && username.length >= 3) {
      fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(user => this.setState({username, user: user})) // set user data here
      .catch(err => {
        console.log('USER HTTP ERROR', err)
        this.setState({message: err.message})
      })
    } else {
      this.setState({message: 'Enter valid username'})
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find Git User</h1>
        </header>
        <div className="container App-intro">
          <h4>{this.state.message}</h4>
          <Search
            username={this.state.username}
            onSearch={username => {
              console.log('App.onSearch', username)
              this.findUser(username)
              // this.setState((prevState, props) => {
              //   let s = {...prevState, username }
              //   console.log('App.onSearch.setState()', s)
              //   return s;
              // });
            }}
          />
          <div className='row'>
            <div className='col s6'>
              <Card user={this.state.user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
