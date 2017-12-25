import { combineReducers } from 'redux';
import CarsReducer from '../reducers/reducer_cars';
import CarSelectReducer from '../reducers/reducer_car_select';

const rootReducer = combineReducers({
  cars: CarsReducer,
  selectedCar: CarSelectReducer
});

export default rootReducer;
