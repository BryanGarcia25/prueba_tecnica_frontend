<template>
    <div class="container">
        <el-card class="card">
            <div class="information-card">
                <h1><strong>Inicio de sesión</strong></h1>
                <p>Bienvenido al sistema de gestion de usuarios y contactos asignados. Por favor ingrese su nombre de usuario y contraseña para acceder a la aplicación web.</p>
            </div>
            <div class="login-card">
                <div class="login-card-children">
                    <div class="form-login-card">
                        <label for="username">Ingrese su nombre de usuario</label>
                        <el-input class="user-input" name="username" type="text" :rows="2" v-model="user" placeholder="Usuario"/>
                    </div>
                    <div class="form-login-card">
                        <label class="email" for="email">Ingrese su correo electrónico</label>
                        <el-input class="email-input" name="email" type="email" :rows="2" v-model="email" placeholder="Correo electrónico"/>
                    </div>
                    <el-button class="button" type="primary" size="default" @click="validateUser">Acceder</el-button>
                </div>
            </div>
        </el-card>
    </div>

    <el-dialog v-model="dialogVisible" title="Atención" width="500" align-center>
        <span>{{ messageDialog }}</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Ok</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
    import router from '@/router';
    import { authenticateUser } from '@/services/authenticateUser';
    import { storageToken } from "@/services/storageToken";
    import { ref } from 'vue'

    const user = ref('');
    const email = ref('');
    const dialogVisible = ref(false);
    const messageDialog = ref('');

    const validateUser = () => {
        authenticateUser(user, email).then(resp => {
            if (resp['data'] != null) {
                storageToken(resp['data']);
                router.push("/usuarios");
            }
        }).catch(error => {

            switch (error['response']['status']) {
                case 404:
                    messageDialog.value = "Lo sentimos, no puede acceder debido a un error en sus datos, verifique de nuevo";
                    break;
                case 500:
                    messageDialog.value = "Lo sentimos, el servidor esta fuera de servicio";
                    break;
                default:
                    break;
            }

            dialogVisible.value = true;

        });
    }

</script>

<style scoped>
    .container {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
    }

    .container > .card {
        height: 70vh;
        /* background: black;
        color: white; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .information-card {
        text-align: center;
    }

    .information-card > h1 {
        font-size: 40px;
        font-weight: bold;
    }

    .information-card > p {
        font-size: 20px;
    }

    .login-card {
        width: 100%;
    }

    .login-card-children {
        width: 60%;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
    }

    .login-card-children > .form-login-card > .user-input,
    .login-card-children > .form-login-card > .email-input {
        margin: 5px 0px 10px 0px;
    }

    /* .container > div:first-child {
        text-align: center;
        margin-bottom: 20px;
    }

    .container-login {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
    }

    .form {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    .form > p {
        margin-bottom: 5px;
    } */
</style>
