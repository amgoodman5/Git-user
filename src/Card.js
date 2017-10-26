import React from 'react';

//component did mount

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
      username: props.username };
  }

componentDidMount(){
  if (this.state.username && this.state.username.length >= 3){
  fetch(`https:api.github.com/users/${this.state.username}`)
  .then(res => res.json())
    .then(res => this.setState({...this.state, user:res}))
    .catch(err => this.setState({...this.state}))
  }
    else {

    }
}


  render() {
    if (this.state.message){
      return <div className = "error">{this.state.error.message}</div>
    }
    return (
      <div className="Card">
        <img src={this.state.user.avatar_url}/>
        <h3> {this.state.user.name}</h3>
      </div>
    );
  }
}

export default Card;
