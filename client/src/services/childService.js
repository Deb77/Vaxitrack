import axios from 'axios';
import { baseUrl } from '../config/config';

export const childService = {
    post,
    put,
    del
}

function post(apiEndpoint, payload) {
    return axios.post(baseUrl + 'child/'+apiEndpoint,payload)
}

function put(apiEndpoint, payload) {
    return axios.put(baseUrl + 'child/'+ apiEndpoint +payload.id)
}

function del (apiEndpoint, payload){
    return axios.delete(baseUrl + 'child/' + apiEndpoint + payload.id);
}  