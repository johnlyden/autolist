import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deActivateCar } from '../actions/index';
import SearchBar from './search_bar';
import CarList from './car_list';
import Header from './header';
import CarShow from './car_show';

class App extends Component {
  constructor(props){
    super(props);

    this.isShowingCars = this.isShowingCars.bind(this);
    this.activeCar = this.activeCar.bind(this);
  }

  isShowingCars() {
    const cars = this.props.cars;
    return Object.keys(cars).length === 0 && cars.constructor === Object 
  }

  activeCar() {
    if (!this.props.activeCar) { return null }
    return this.props.cars[this.props.activeCar];
  }

  deActivateCar() {
    this.props.removeActiveCar()
  }

  render() {
    const small = this.props.cars.length ? true : false;
    return (
      <div>
        <Header small={!this.isShowingCars()} activeCar={this.props.activeCar}/>
        <SearchBar showSearch={this.isShowingCars()}/>
        <CarList />
        <CarShow activeCar={this.activeCar()} cars={this.props.cars} deActivateCar={this.props.deActivateCar}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    activeCar: state.selectedCar
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deActivateCar }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);