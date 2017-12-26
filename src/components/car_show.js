import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

export default class CarShow extends Component {
  constructor(props){
    super(props)
    this.renderCar = this.renderCar.bind(this);
  }

  renderCar(carData) {
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
    return (
      <div>
        <Card>
        <h3>{`${year} ${make} ${model}`}</h3>
        <h4>{condition}</h4>
        <h4>{mileage}</h4>
        <img src={primary_photo_url} />
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