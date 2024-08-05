import axios from "axios"

// Api para obtener a los usuarios registrados con su respectivo id
export const getUserById = async (id) => {
    const resp = await axios.get(`/api/users/registered_user/${id}`);
    return resp.data;
}