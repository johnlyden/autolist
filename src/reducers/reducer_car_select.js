import { SELECT_CAR } from '../actions/index';
export default function (state = null, action) {
	switch (action.type) {
    case SELECT_CAR:
			return action.payload
	}
	return state;
}