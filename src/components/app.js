import React, { Component } from 'react';
import SearchBar from './search_bar';
import CarList from './car_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CarList />
      </div>
    );
  }
}