import axios from "axios";

export const storageToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', JSON.stringify(token));
}