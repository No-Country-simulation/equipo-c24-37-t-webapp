import axios from 'axios';
import Auth from "@/lib/auth";
import {clientEnv} from "@/config/clientEnv";

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

apiClient.interceptors.request.use(async (config) => {
    const session = await Auth.cookieData();
    if (session) {
        config.headers.Authorization = `Bearer ${session.token}`;
    }
    return config;
});

export default apiClient;