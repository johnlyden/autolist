import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';


export default (props) => {

  return (
    <Card className="card">
      <div className="thumb-container">
        <img src={props.carData.thumbnail_url}/>
      </div>
      <div className="detail-container">
        <div className="flex-row">
          <p>{props.carData.year} {props.carData.make} {props.carData.model}</p>
        </div>
        <div className="flex-row details">
          <p>Price</p>
          <p>{props.carData.price}</p>
        </div>
        <div className="flex-row details">
          <p>Mileage</p>
          <p>{props.carData.mileage}</p>
        </div>
        <div className="flex-row details">
          <p>Location</p>
          <p>{props.carData.city}, {props.carData.state}</p>
        </div>
      </div>
    </Card>
  )
}
