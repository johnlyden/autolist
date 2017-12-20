import React, { Component } from 'react';

export default class SearchBar extends Component {
  
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
    this.setState({ term: '' });
    // call an action creator to get the list of cars
    // this.props.fetchCars(this.state.term);
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

