import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import CarList from './car_list';
import Header from './header';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const small = this.props.cars.length ? true : false;
    return (
      <div>
        <Header small={small}/>
        <SearchBar />
        <CarList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(App);