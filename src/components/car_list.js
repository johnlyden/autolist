import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCar, fetchCars } from '../actions/index';
import CarDetail from './car_detail';
import Button from 'material-ui/Button'

/** class representing a list of car_detail items */
class CarList extends Component {
  constructor(props) {
    super(props);

    this.renderCar = this.renderCar.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderNavButtons = this.renderNavButtons.bind(this);
    // set initial state for carList pagination
    this.state = {
      page: 1
    }
  }

  /**
   * returns JSX for Card component - passing props
   * @param { object } carData contains information about car being rendered
   */
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

  /**
   * calls method to advance pagination - passing direction
   * @param { object } e event object 
   */
  handleNavClick(e) {
    const direction = e.currentTarget.id;
    this.advancePage(direction);
  }

  /**
   * sets state of current page looking at
   * calls fetchCars passing new page as a param 
   * @param { string } direction 
   */
  advancePage(direction) {
    const currentPage = this.state.page;
    let nextPage = direction === "next" ? currentPage + 1 : currentPage - 1;

    this.setState({
      page: nextPage
    })

    this.props.fetchCars({
      'page': nextPage
    })
  }

  /**
   * looks at the page number in component state and renders jsut a next button or next and prev button
   */
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
    // if theres an active car or no cars to show - don't show this component
    if (this.props.activeCar || Object.keys(this.props.cars).length === 0) {
      return <div></div>
    }

    const componentClasses = ['car-list-container '];    
    const carsObj = this.props.cars;

    // manipulate object of cars with their unique index as key - into an iterable array
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

export default connect(null, mapDispatchToProps)(CarList);
