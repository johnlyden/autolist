import axios from 'axios';

export const FETCH_CARS = 'FETCH_CARS';
export const SELECT_CAR = 'SELECT_CAR';
export const DEACTIVATE_CAR = 'DEACTIVATE_CAR';
export const EMPTY_CARS_LIST = 'EMPTY_CARS_LIST';


const ROOT_URL = 'https://autolist-test.herokuapp.com/search?'

/** action creator for fetching cars */
export function fetchCars(searchData) {
	let queryString = "";
	// will create url params for each key/value passed in
	for (const [key, value] of Object.entries(searchData)) {
		if (value) {
			queryString += `&${key}=${value}`
		}
	}
	// piece together URL
	const filterURL = `${ROOT_URL}${queryString}`
	// make request - returns promise - redux-promise will resolve
	const request = axios.get(filterURL).catch((err) => {
		console.log('error with the request ', err);
	});

	return {
		type: FETCH_CARS,
		payload: request
	};
}

/** action creator for when a car is selected to view */
export function selectCar(carId) {
	return {
		type: SELECT_CAR,
		payload: carId
	}
}

/** action creator for fetching cars with price filtering */
export function filterPrice(min, max) {
	const minString = min ? `&price_min=${min}` : '';
	const maxString = max ? `&price_max=${max}` : '';
	const filterURL = `${ROOT_URL}${minString}${maxString}`;
	const request = axios.get(filterURL).catch((err) => {
		console.log('error with the request ', err);
	});
	return {
		type: FETCH_CARS,
		payload: request
	}
}

/** action creator for closing out the car show component */
export function deActivateCar() {
	return {
		type: DEACTIVATE_CAR,
		payload: null
	}
}

/** action creator for emptying hte list of cars held in app state */
export function emptyCars() {
	return {
		type: EMPTY_CARS_LIST,
		payload: {}
	}
}