import axios from 'axios';
import config from '../config/config';

export const signUpService = {
    post,
}

function post(apiEndpoint,payload) {
    return axios.post(config.baseUrl + apiEndpoint,payload)
        .then(res => res)
        .catch(err => console.log(err));    
}