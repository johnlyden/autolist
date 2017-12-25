import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import CarList from './car_list';
import Header from './header';

class App extends Component {
  constructor(props){
    super(props);

    // this.shouldShowSearch = !this.props.activeCar;
    // this.shouldShowList = this.props.cars.length && !this.props.activeCar;
  }
  render() {
    const small = this.props.cars.length ? true : false;
    return (
      <div>
        <Header small={small}/>
        <SearchBar showSearch={!this.props.cars.length}/>
        <CarList />
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