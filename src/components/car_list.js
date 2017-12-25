import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCar } from '../actions/index';
import CarDetail from './car_detail';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.renderCar = this.renderCar.bind(this);
  }

  renderCar(carData) {
    return (
      <CarDetail 
        carData={carData}
        selectCar={this.props.selectCar}
        key={carData.id.toString()}
        id={carData.id}
      />
    );
  }

  render() {
    if (this.props.activeCar) {
      return <div></div>
    }
    return (
      <div>
        <ul>
          {this.props.cars.map(this.renderCar)}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCar }, dispatch);
}

function mapStateToProps(state) {
  return { 
    cars: state.cars,
    activeCar: state.selectedCar
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CarList);
