import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import CarList from './car_list';
import Header from './header';
import CarShow from './car_show';

class App extends Component {
  constructor(props){
    super(props);

    this.isShowingCars = this.isShowingCars.bind(this);
    // this.shouldShowList = this.props.cars.length && !this.props.activeCar;
  }

  isShowingCars() {
    const cars = this.props.cars;
    return Object.keys(cars).length === 0 && cars.constructor === Object 
  }



  render() {
    const small = this.props.cars.length ? true : false;
    return (
      <div>
        <Header small={!this.isShowingCars()}/>
        <SearchBar showSearch={this.isShowingCars()}/>
        <CarList />
        <CarShow activeCar={this.props.activeCar} cars={this.props.cars}/>
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

export default connect(mapStateToProps)(App);