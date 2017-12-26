import React, { Component } from 'react';

export default class CarShow extends Component {
  constructor(props){
    super(props)
    this.renderCar = this.renderCar.bind(this);

  }

  renderCar(id) {
    debugger;
    alert('hey, ', id);
  }

  render(){
    if (!this.props.activeCar){ return <div></div>}
    return (
      <div>
        {this.renderCar(this.props.activeCar)}
      </div>
    );
  }
}