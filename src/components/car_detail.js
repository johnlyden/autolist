import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';


export default (props) => {

  return (
    <Card >
      <div className="row">
        <div className="col-sm-3 thumb-container">
          <img src={props.carData.thumbnail_url}/>
        </div>
        <div className="col-sm-9">
          <div className="row">
            <p>{props.carData.year} {props.carData.make} {props.carData.model}</p>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <p>Price</p>
              <p>{props.carData.price}</p>
              </div>
            <div className="col-sm-4">
              <p>Mileage</p>
              <p>{props.carData.mileage}</p>
              </div>
            <div className="col-sm-4">
              <p>Location</p>
              <p>{props.carData.city}, {props.carData.state}</p>
              </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

{/* <div className="thumb-container">
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
</div> */}