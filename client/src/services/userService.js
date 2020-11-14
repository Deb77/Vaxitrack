import axios from 'axios';
import { baseUrl } from '../config/config';

export const userService = {
    post,
}

function post(apiEndpoint, payload) {
    return axios.post(baseUrl + apiEndpoint,payload)    
}
