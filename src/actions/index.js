import axios from 'axios';

export const FETCH_CARS = 'FETCH_CARS';
export const SELECT_CAR = 'SELECT_CAR';
export const DEACTIVATE_CAR = 'DEACTIVATE_CAR';
export const EMPTY_CARS_LIST = 'EMPTY_CARS_LIST';

const ROOT_URL = 'https://autolist-test.herokuapp.com/search?'

export function fetchCars(searchData) {
    let queryString = "";
    for (const [key, value] of Object.entries(searchData)) {
        if (value) {
            queryString += `&${key}=${value}`
        }
    }

    const filterURL = `${ROOT_URL}${queryString}`

    const request = axios.get(filterURL).catch((err) => {
        console.log('error with the request ', err);
    });

    return {
        type: FETCH_CARS,
        payload: request
    };
}

export function selectCar(carId) { 
    return {
        type: SELECT_CAR,
        payload: carId
    }
}

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

export function deActivateCar() {
    return {
        type: DEACTIVATE_CAR,
        payload: null
    }
}

export function goToNextPage(page) {
    return {
        type: FETCH_CARS,
        payload: request
    }
}

export function emptyCars() {
    return {
        type: EMPTY_CARS_LIST,
        payload: {}
    }
}