import axios from "axios";

// API para eliminar un usuario en especifico con su ID
export const removeUserById = (id) => {
    axios.post(`/api/users/delete/${id}`);
}