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
    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderNavButtons = this.renderNavButtons.bind(this);
    this.state = {
      page: 1
    }
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

  renderCars(cars) {
    for (var key in cars) {
      const carData = cars[key]
      this.renderCar(carData);
    } 
  }

  handleNavClick(e) {
    const direction = e.currentTarget.id;
    this.advancePage(direction);
  }

  advancePage(direction) {
    const currentPage = this.state.page;
    let nextPage;
    if (direction === "next") {
      nextPage = currentPage + 1;
    } else {
      nextPage = currentPage - 1;
    }

    this.setState({
      page: nextPage
    })

    this.props.fetchCars({
      'page': nextPage
    })
  }

  renderNavButtons() {
    const buttonStyles = {
      'marginBottom': '20px',
      'marginTop': '20px'
    }
    if (this.state.page > 1) {
      return (
        <div>
          <Button
          id="prev"
          style={buttonStyles}
          onClick={this.handleNavClick}>Prev page
          </Button>
          <Button
          id="next"
          style={buttonStyles}
          onClick={this.handleNavClick}>next page
          </Button>
        </div>
      )
    }
    return (
      <Button
      id="next"
      style={buttonStyles}
      onClick={this.handleNavClick}>next page
      </Button>
    )
  }

  render() {
    if (this.props.activeCar || Object.keys(this.props.cars).length === 0) {
      return <div></div>
    }

    const componentClasses = ['car-list-container '];    

    const carsObj = this.props.cars;

    const carsArray = Object.keys(carsObj).map((key) => {
      return carsObj[key]
    });

    return (
      <div className={componentClasses.join(' ')}>
        
        {this.renderNavButtons()}
        
        <ul>
          {carsArray.map(this.renderCar)}
        </ul>

        {this.renderNavButtons()}


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
