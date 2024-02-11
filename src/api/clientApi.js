import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()

const clientApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores
clientApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default clientApi;