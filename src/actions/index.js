import axios from 'axios';

export const FETCH_CARS = 'FETCH_CARS';

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

export function selectCar(id) {
    alert(id);
}