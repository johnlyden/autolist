import { SELECT_CAR, DEACTIVATE_CAR } from '../actions/index';
export default function (state = null, action) {
	switch (action.type) {
    case SELECT_CAR:
			return action.payload
		case DEACTIVATE_CAR:
			return null
	}
	return state;
}