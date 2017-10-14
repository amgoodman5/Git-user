import React from 'react';

//

class Searchform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchUser: props.username || '' };
    this.onSearch = props.onSearch;
  }

  render() {
    return (
      <div className="Search">
        <h3>Enter github</h3>
        <input
          onChange={(event) => {
            console.log('Search.input.onChange', event.target.value)
            this.setState({ searchUser: event.target.value });
          }}
        />
        <button onClick={() => {
          console.log('Search.button.Clicked!', this.state.searchUser)
          this.onSearch(this.state.searchUser)
        }}>Search</button>
        <div />
      </div>
    );
  }
}

//add a life cycle event  component did mount? mont? app
//make the ajax call to set the state
export default Searchform;
