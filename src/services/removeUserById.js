import axios from "axios";

export const removeUserById = (id) => {
    axios.post(`/api/users/delete/${id}`);
}