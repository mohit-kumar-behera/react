import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  handleInputChange(ev) {
    this.setState({ term: ev.target.value });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.submitFormHandler(this.state.term);
  }

  render() {
    return (
      <div className="search-bar-container">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <label htmlFor="user-input">
            {this.props.showSpinner ? 'Loading...' : 'Image Search'}
          </label>
          <input
            id="user-input"
            type="text"
            className="user-input"
            placeholder="Search Images"
            value={this.state.term}
            onChange={this.handleInputChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
