import axios from 'axios';
import { baseUrl } from '../config/config';

export const userService = {
    post,
    put
}

function post(apiEndpoint, payload) {
    return axios.post(baseUrl + apiEndpoint,payload)    
}

function put(apiEndpoint, payload) {
    return axios.put(baseUrl + apiEndpoint,payload)    
}
