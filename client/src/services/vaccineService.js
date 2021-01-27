import axios from 'axios';
import { baseUrl } from '../config/config';

export const vaccineService = {
    post,
    put
}

function post(apiEndpoint, payload) {
    return axios.post(baseUrl + 'vaccine/' + apiEndpoint, payload)    
}

function put(apiEndpoint, payload) {
    return axios.put(baseUrl + 'vaccine/' + apiEndpoint,payload)    
}
