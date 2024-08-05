<template>
    <div>
        <div class="container">
            <div class="details">
                <el-card>
                    <div class="username">
                        <div class="avatar">
                            <img src="../assets/images/user.png" alt="user" height="50px">
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
                                    <img src="../assets/images/user.png" alt="user" height="50px">
                                </div>
                                <div class="info-user">
                                    <h3>Nombre</h3>
                                    <p>{{ userInformation['name'] }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/email.png" alt="user" height="50px">
                                </div>
                                <div class="info-user">
                                    <h3>Correo</h3>
                                    <p>{{ userInformation['email'] }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/phone.png" alt="user" height="50px">
                                </div>
                                <div class="info-user">
                                    <h3>Teléfono</h3>
                                    <p>{{ phone }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/references.png" alt="user" height="50px">
                                </div>
                                <div class="info-user">
                                    <h3>Referencias</h3>
                                    <p>{{ references }}</p>
                                </div>
                            </div>
                            <div class="data">
                                <div class="icon">
                                    <img src="../assets/images/date.png" alt="user" height="50px">
                                </div>
                                <div class="info-user">
                                    <h3>Fecha de creación</h3>
                                    <p> {{ userInformation['createDate'] }}</p>
                                </div>
                            </div>
                        </div>
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
    const route = useRoute();

    getUserById(route.params.id).then(resp => {
        userInformation.value = resp;
        phone.value = userInformation.value['contacts'][0]['phone'];
        references.value = userInformation.value['contacts'][0]['references']
        console.log(userInformation.value['contacts'][0]['phone']);
        
    });

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
        margin-bottom: 10px;
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

    .info-user > h3 {
        font-weight: bold;
    }
    
</style>