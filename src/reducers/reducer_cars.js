import { FETCH_CARS, EMPTY_CARS_LIST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_CARS:
			return _.mapKeys(action.payload.data.records, 'id');
		case EMPTY_CARS_LIST:
			return {}
	}
	return state;
}