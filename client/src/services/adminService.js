import axios from 'axios';
import { baseUrl } from '../config/config';

export const adminService = {
    post
}

function post(apiEndpoint, payload) {
    return axios.post(baseUrl + 'doctor/'+apiEndpoint,payload)
}
