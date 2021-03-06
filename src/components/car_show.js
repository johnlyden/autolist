import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

/** represents the car show page */
export default class CarShow extends Component {
  constructor(props){
    super(props)

    this.renderCar = this.renderCar.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  /**
   * call deActivateCar callback passed from props
   */
  handleCloseClick() {
    this.props.deActivateCar();
  }

  renderCar(carData) {
    // pull off useful properties
    const { display_color,
            body_style, 
            condition,
            make,
            model,
            mileage,
            mileage_humanized,
            price,
            primary_photo_url,
            state,
            city,
            vin,
            trim,
             year 
    } = carData

    const cardStyle = {
      'position': 'relative',
      'marginTop': '50px'
    }
    return (
      <div>
        <Card style={cardStyle}>
          <div className="close-container">
            <span className="close-link" onClick={this.handleCloseClick}>X</span>
          </div>
          <h3>{`${year} ${make} ${model}`}</h3>
          <h4>{condition}</h4>
          <h5>{price}</h5>
          <p>{`${city}, ${state}`}</p>
          <div className="image-container">
            <img src={primary_photo_url} />
          </div>
        </Card>
      </div>
    )
  }

  render(){
    if (!this.props.activeCar){ return <div></div>}
    return (
      <div>
        {this.renderCar(this.props.activeCar)}
      </div>
    );
  }
}