import { combineReducers } from 'redux';
import CarsReducer from '../reducers/reducer_cars';

const rootReducer = combineReducers({
  cars: CarsReducer
});

export default rootReducer;
