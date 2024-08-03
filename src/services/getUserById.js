import axios from "axios"

export const getUserById = async (id) => {
    const resp = await axios.get(`/api/users/registered_user/${id}`);
    return resp.data;
}