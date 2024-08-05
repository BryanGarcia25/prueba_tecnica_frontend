<template>
    <div class="container">
        <!-- Card para crear un formulario donde tome el nombre y correo del usuario para su autenticación -->
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
                    <!-- Botón para acceder a la pantalla principal -->
                    <el-button class="button" type="primary" size="default" @click="validateUser">Acceder</el-button>
                </div>
            </div>
        </el-card>
    </div>

    <!-- Dialog para mostrar si el usuario presenta un error en sus datos ingresados o si el servidor esta fuera de servicio -->
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

    // Método para validar al usuario con su nombre y correo
    const validateUser = () => {
        authenticateUser(user, email).then(resp => {
            // Si la respuesta generá un token, entonces procede a almacenar el token en el almacenamiento local del navegador y envia a la pantalla principal
            if (resp['data'] != null) {
                storageToken(resp['data']);
                router.push("/usuarios");
            }
        }).catch(error => {
            // En caso de que exista un error la variable reactiva messageDialog almacenará el mensaje dependiendo del estatus del error si fue un 404 o un 500
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

            // Activa el dialog para ser mostrado
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

    .login-card-children > .form-login-card > label {
        font-size: 12px;
    }

    .login-card-children > .form-login-card > .user-input,
    .login-card-children > .form-login-card > .email-input {
        margin: 5px 0px 10px 0px;
    }

    @media screen and (max-width: 767px) {
        .container {
            width: 100%;
            display: block;
            padding: 0px 10px;
        }

        .information-card > h1 {
            font-size: 32px;
        }

        .information-card > p {
            font-size: 14px;
        }

        .login-card-children {
            width: 90%;            
        }

        .login-card-children > .form-login-card > .user-input,
        .login-card-children > .form-login-card > .email-input {
            font-size: 14px;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .container {
            width: 80%;
            display: block;
            padding: 0px 10px;
        }

        .login-card-children {
            width: 80%
        }
    }

</style>
