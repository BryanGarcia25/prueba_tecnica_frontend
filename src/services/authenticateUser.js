// import router from "@/router";
import axios from "axios";

// Llama a la api que permitirá autenticar a los usuarios, enviando su nombre y correo electrónico
export const authenticateUser = async (username, email) => {
    const resp = axios.post('/api/auth/login', {
        name: username.value,
        email: email.value
    });
    return resp;
}