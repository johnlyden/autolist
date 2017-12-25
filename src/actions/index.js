import axios from 'axios';

export const FETCH_CARS = 'FETCH_CARS';
export const SELECT_CAR = 'SELECT_CAR';
export const FILTER_PRICE = 'FILTER_PRICE';

const ROOT_URL = 'https://autolist-test.herokuapp.com/search?&'

export function fetchCars(searchData) {
    const { make, model } = searchData;
    const filterURL = `${ROOT_URL}make=${make}&model=${model}`;
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
    const filterURL = `${ROOT_URL}price_min=${min}&price_max=${max}`;
    const request = axios.get(filterURL).catch((err) => {
        console.log('error with the request ', err);
    });
    return {
        type: FETCH_CARS,
        payload: request
    }
}