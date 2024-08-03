// import router from "@/router";
import axios from "axios";

export const authenticateUser = async (username, email) => {
    const resp = axios.post('/api/auth/login', {
        name: username.value,
        email: email.value
    });
    return resp;
}