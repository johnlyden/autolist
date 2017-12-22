import axios from 'axios';

const ROOT_URL = `https://autolist-test.herokuapp.com/search?&`
export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(searchData) {
    const { make, model } = searchData;
    const filterURL = `${ROOT_URL}make=${make}&model=${model}`;
    const request = axios.get(filterURL);
    debugger;
    console.log('Request:', request);

    return {
        type: FETCH_CARS,
        payload: request
    };
}