import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.renderCar = this.renderCar.bind(this);
  }

  renderCar(carData) {
    // debugger;
    return (
      <div>
        hey
      </div>
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.cars.map(this.renderCar)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    cars: state.cars
  };
}


export default connect(mapStateToProps)(CarList);