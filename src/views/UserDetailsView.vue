<template>
    <div>
        <div class="container">
            <div class="details">
                <!-- Card para mostrar toda la informacion del usuario y su contacto asignado -->
                <el-card>
                    <div class="username">
                        <div class="avatar">
                            <img src="../assets/images/user.png" alt="user">
                        </div>
                        <div class="name">
                            <h1><strong> {{ userInformation['name'] }} </strong></h1>
                        </div>
                    </div>
                    <hr>
                    <div class="body-card">
                        <h1>Información del usuario</h1>
                        <div class="body">
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/user.png" alt="user">
                                </div>
                                <div class="info-user">
                                    <h3>Nombre</h3>
                                    <p>{{ userInformation['name'] }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/email.png" alt="user" >
                                </div>
                                <div class="info-user">
                                    <h3>Correo</h3>
                                    <p>{{ userInformation['email'] }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/phone.png" alt="user" >
                                </div>
                                <div class="info-user">
                                    <h3>Teléfono</h3>
                                    <p>{{ phone }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/references.png" alt="user" >
                                </div>
                                <div class="info-user">
                                    <h3>Referencias</h3>
                                    <p>{{ references }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/date.png" alt="user" >
                                </div>
                                <div class="info-user">
                                    <h3>Fecha de creación</h3>
                                    <p> {{ userInformation['createDate'] }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Botón para regresar a la pantalla principal -->
                        <el-button type="primary" size="default" @click="goBack">Regresar</el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { getUserById } from '@/services/getUserById';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

    const userInformation = ref([]);
    const phone = ref('');
    const references = ref('');
    // Usando la función useRoute para obtener nuestro ID que enviamos por la URL
    const route = useRoute();

    // Método para obtener la información del usuario con su respectivo id
    getUserById(route.params.id).then(resp => {
        // La respuesta obtenida se envia a la lista
        userInformation.value = resp;
        // Para en caso de los contactos se almacenan en sus respectivas variables de manera individual para mostrar la información
        phone.value = userInformation.value['contacts'][0]['phone'];
        references.value = userInformation.value['contacts'][0]['references']
        
    });

    // Método para regresar a la lista de los usuarios registrados
    const goBack = () => {
        router.push('/usuarios');
    }
    
</script>

<style scoped>

    .container {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 75%;
    }

    .username {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 10px;
    }

    .username > .avatar > img {
        height: 50px;
    }

    .body-card {
        margin-top: 15px;
    }

    .body {
        display: grid;
        grid-template-columns: 2fr 2fr;
        gap: 20px;
        margin: 20px 0;
    }

    .data {
        display: flex;
        border: 1px solid black;
        padding: 20px;
        align-items: center;
    }

    .icon {
        margin-right: 20px;
    }

    .data > .icon > img {
        height: 50px;
    }

    .info-user > h3 {
        font-weight: bold;
    }

    @media screen and (max-width: 767px) {
        .container {
            display: block;
            width: 100%;
            padding: 0px 15px;
        }

        .username {
            display: flex;
            justify-content: space-between;
        }

        .username > .name { 
            font-size: 12px;
        }

        .username > .avatar > img {
            height: 25px;
        }

        .body {
            grid-template-columns: 1fr;
            gap: 10px;
            margin: 10px 0;
        }

        .body-card > h1 {
            font-size: 18px;
        }

        .data {
            padding: 10px;
        }

        .data > .icon > img {
            height: 30px;
        }

        .info-user > h3 {
            font-size: 16px;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .container {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            width: 75%;
        }
    }
    
</style>