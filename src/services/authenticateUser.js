import router from "@/router";
import axios from "axios";

export const authenticateUser = (username, email) => {
    axios.post('/api/auth/login', {
        name: username.value,
        email: email.value
    }).then(response => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response['data']}`;
        localStorage.setItem('token', JSON.stringify(response['data']));

        if (response['data'] != null) {
            router.push('/usuarios')
        }
    });
}