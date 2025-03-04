import axios from 'axios';
import {clientEnv} from '@/config/env';

const apiClient = axios.create({
    baseURL: clientEnv('API_URL', 'http://localhost:8000'),
    timeout: 20000,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export default apiClient;