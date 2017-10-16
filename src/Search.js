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
      <div className='row'>
        <form className="search col s8" onSubmit={e => {
          e.preventDefault()
          console.log('Search.Form.Submit!', this.state.searchUser)
          this.onSearch(this.state.searchUser)
        }}>
          <h3>Enter github username:</h3>
          <input
            onChange={(event) => {
              console.log('Search.input.onChange', event.target.value)
              this.setState({ searchUser: event.target.value });
            }}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

//add a life cycle event  component did mount? mont? app
//make the ajax call to set the state
export default Searchform;
