import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterPrice } from '../actions/index';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

class FilterControl extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      min: null,
      max: null    
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    
  }

  handleOnChangeMin = (e) => {
    this.setState({
      min: e.target.value
    })
  }
  handleOnChangeMax = (e) => {
    this.setState({
      max: e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    const min = this.state.min;
    const max = this.state.max;
    this.props.filterPrice(min, max);
  }

  render() {
    // if (!this.state.show) { return <div></div> };
    let { min, max } = this.state
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
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterPrice }, dispatch );
}

export default connect(null, mapDispatchToProps)(FilterControl);