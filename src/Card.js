import React from 'react';

//component did mount

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log('Card.constructor:', props)
    this.state = {
      user: {},
      username: props.username,
      message: 'Ready, enter username' };
  }

  componentDidMount(){
    console.log('Card.componentDidMount:', this.state)
    if (this.state.username && this.state.username.length >= 3) {
      fetch('https://api.github.com/users/' + this.state.username)
      .then(res => res.json())
      .then(user => this.setState({...this.state, user: user })) // component
      .catch(err => {
        console.log('FAIL HTTP', err)
        this.setState({...this.state, message: err.message})
      })
    } else {
      this.setState({...this.state, message: 'Ready, enter username'})
    }
  }

  render() {
    console.log('Card.render:', this.state)

    if (this.state.message) {
      return <div className="statusMessage">Message: {this.state.message}</div>
    }
    return (
      <div className="Card">
        <img alt={this.state.user.name + ' avatar'} src={this.state.user.avatar_url}/>
        <h3>{this.state.user.name}</h3>
      </div>
    );
  }
}

export default Card;
