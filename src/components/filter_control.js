import React, {Component} from 'react';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

export default class FilterControl extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      min: null,
      max: null    
    }
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

  render() {
    // if (!this.state.show) { return <div></div> };
    let { min, max } = this.state
    return (
      <form className="container">
        <Input
            id="min"
						placeholder="Min"
						value={this.state.min}
						onChange={this.handleOnChangeMin}
            className="" 
          />
        <Input
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