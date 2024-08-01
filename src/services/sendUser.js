import axios from "axios";

export const sendUser = (user) => {
    // console.log(user.value[0]);
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