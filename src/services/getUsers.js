import axios from "axios";

export const getUsers = async () => {
    const resp = await axios.get('/api/users/registered_users');
    return resp.data;
}