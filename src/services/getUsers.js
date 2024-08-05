import axios from "axios";

// API para obtener todos los usuarios registrados
export const getUsers = async () => {
    const resp = await axios.get('/api/users/registered_users');
    return resp.data;
}