import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

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
    const componentClasses = ['search-bar'];    
    if (!this.props.showSearch) { componentClasses.push('hide'); }

    return (
			<div className={componentClasses.join(' ')}>
				<form onSubmit={this.onFormSubmit} className="">
					<Input
						placeholder="Search make &amp; model"
						value={this.state.term}
						onChange={this.onInputChange}
            className="col-sm-12" 
          />
          <Button type="submit" className="btn btn-primary">Search</Button>
				</form>
			</div>
		);
  }
}
function mapStateToProps(state) {
  return { 
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);