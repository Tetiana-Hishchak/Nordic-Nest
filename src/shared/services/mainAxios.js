import axios from 'axios';
export const mainAxios = axios.create({
    withCredentials: true,
});
mainAxios.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    if (Boolean(error.response) && error.response.status === 401) {
        // setAuth(false);
    }
    return Promise.reject(error);
});
