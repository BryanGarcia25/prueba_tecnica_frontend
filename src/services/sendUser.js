import axios from "axios";

// Api para registrar un nuevo usuario y contacto enviando la siguiente estructura JSON para su registro en la base de datos
export const sendUser = (user) => {
    axios.post('/api/users/create', { 
        id: 0,
        name: user.value[0],
        email: user.value[1],
        createDate: new Date(),
        contacts: [
            {
                id: 0,
                name: user.value[0],
                phone: user.value[2],
                email: user.value[1],
                references: user.value[3],
                userId: 0
            }
        ]
    })
}