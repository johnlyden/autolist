import { FETCH_CARS } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_CARS:
			return _.mapKeys(action.payload.data.records, 'id');
	}
	return state;
}