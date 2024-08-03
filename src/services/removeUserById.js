import axios from "axios";

export const removeUserById = (id) => {
    console.log(id);
    axios.post(`/api/users/delete/${id}`);
}