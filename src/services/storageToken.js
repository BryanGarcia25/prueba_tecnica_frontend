import axios from "axios";

// Almacena la api generada por JWT en el backend en el almacenamiento local del navegador con el nombre 'token'
export const storageToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', JSON.stringify(token));
}