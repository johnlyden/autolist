import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCar, fetchCars } from '../actions/index';
import CarDetail from './car_detail';
import Button from 'material-ui/Button'

class CarList extends Component {
  constructor(props) {
    super(props);
    this.renderCar = this.renderCar.bind(this);
    this.renderCars = this.renderCars.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      page: 1
    }
  }

  renderCar(carData) {
    // debugger;
    return (
      <CarDetail 
        carData={carData}
        selectCar={this.props.selectCar}
        key={carData.id.toString()}
        id={carData.id}
      />
    );
  }

  renderCars(cars) {
    for (var key in cars) {
      console.log(key + " -> " + cars[key]);
      const carData = cars[key]
      this.renderCar(carData);
      
    } 
  }

  handleClick(e) {
    e.preventDefault();
    this.advancePage();
  }

  advancePage() {
    const nextPage = this.state.page + 1;
    this.setState({
      page: nextPage
    })
    this.props.fetchCars({
      'page': nextPage
    })
  }

  render() {
    if (this.props.activeCar) {
      return <div></div>
    }
    const buttonStyles = {
    }
    const carsObj = this.props.cars;

    const carsArray = Object.keys(carsObj).map((key) => {
      return carsObj[key]
    });

    return (
      <div>
        <Button
        style={buttonStyles}
        onClick={this.handleClick}>next page
      
        </Button>
        <ul>
          {carsArray.map(this.renderCar)}
        </ul>
        <Button
        style={buttonStyles} 
        onClick={this.handleClick}>next page
        
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCar, fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return { 
    cars: state.cars,
    activeCar: state.selectedCar
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CarList);
