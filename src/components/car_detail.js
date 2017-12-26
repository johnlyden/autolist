import React, {Component} from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';


export default class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const carId = e.currentTarget.id;
    this.props.selectCar(carId);
  }

  render() {
    const cardStyle= {
      'marginBottom': '20px'
    }
    
    return (
      <Card onClick={this.handleClick} id={this.props.id} style={cardStyle}
        >
        <div className="row">
          <div className="col-md-3 col-sm-12 thumb-container">
            <img src={this.props.carData.thumbnail_url}/>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="">
              <p>{this.props.carData.year} {this.props.carData.make} {this.props.carData.model}</p>
            </div>
            <div className="">
              <div className="col-sm-4">
                <p>Price</p>
                <p>{this.props.carData.price}</p>
                </div>
              <div className="col-sm-4">
                <p>Mileage</p>
                <p>{this.props.carData.mileage}</p>
                </div>
              <div className="col-sm-4">
                <p>Location</p>
                <p>{this.props.carData.city}, {this.props.carData.state}</p>
                </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
