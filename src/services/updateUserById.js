import axios from "axios"

export const updateUser = (user) => {
    axios.post('/api/users/update', { 
        id: user.value['id'],
        name: user.value['name'],
        email: user.value['email'],
        createDate: user.value['createDate'],
        contacts: [
            {
                id: user.value['contacts'][0]['id'],
                name: user.value['name'],
                phone: user.value['contacts'][0]['phone'],
                email: user.value['email'],
                references: user.value['contacts'][0]['references'],
                userId: user.value['contacts'][0]['userId']
            }
        ]
    })
}