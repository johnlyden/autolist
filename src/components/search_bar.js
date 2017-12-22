import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
		this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
		event.preventDefault();
    const data = this.parseSearch();
    this.props.fetchCars(data);
    this.setState({ term: '' });
	}
	
  /**
   * examine the search term and create an object with
   * make, model, color, year
   */
  parseSearch() {
    const searchTerm = this.state.term.split(" ");
    const data = { 
      make: searchTerm[0],
      model: searchTerm[1]
    };
    return data;
  }
  
  render() {
    return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input
						placeholder="Search for a car"
						value={this.state.term}
						onChange={this.onInputChange} 
          />
					<span className="">
						<button type="submit">Search</button>
					</span>
				</form>
			</div>
		);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);