import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterPrice, emptyCars } from '../actions/index';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

/** class representing filters for which cars to show based on price */
class FilterControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      min: null,
      max: null    
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSearchAgainClick = this.handleSearchAgainClick.bind(this);
    this.handleOnChangeMax = this.handleOnChangeMax.bind(this);
    this.handleOnChangeMin = this.handleOnChangeMin.bind(this);
  }

  /**
   * set min value on change of the input
   * @param { object } e 
   */
  handleOnChangeMin(e) {
    this.setState({
      min: e.target.value
    })
  }

  /**
   * set max value on change of the input
   * @param { object } e 
   */
  handleOnChangeMax(e) {
    this.setState({
      max: e.target.value
    })
  }

  /**
   * handle click to let user search for another car
   */
  handleSearchAgainClick() {
    this.props.emptyCars();
  }

  /**
   * calls filter price prop function to change returned list of cars
   * @param { object } e 
   */
  onFormSubmit(e) {
    e.preventDefault();
    const min = this.state.min;
    const max = this.state.max;
    this.props.filterPrice(min, max);
  }

  render() {
    return (
      <form className="container" onSubmit={this.onFormSubmit}>
        <Input
            id="min"
						placeholder="Min"
						value={this.state.min}
						onChange={this.handleOnChangeMin}
            className="" 
          />
        <Input
          id="max"
          placeholder="Max"
          value={this.state.max}
          onChange={this.handleOnChangeMax}
          className="" 
        />
        <Button type="submit" className="btn btn-primary">Filter by price</Button>
        <Button type="" className="btn btn-primary" onClick={this.handleSearchAgainClick}>Search again</Button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterPrice, emptyCars }, dispatch );
}

export default connect(null, mapDispatchToProps)(FilterControl);