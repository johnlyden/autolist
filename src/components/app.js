import React, { Component } from 'react';
import SearchBar from './search_bar';
import CarList from './car_list';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <CarList />
      </div>
    );
  }
}