import axios from 'axios';
import config from '../config/config';

export const userService = {
    post,
}

function post(apiEndpoint, payload) {
    return axios.post(config.baseUrl + apiEndpoint,payload)    
}
