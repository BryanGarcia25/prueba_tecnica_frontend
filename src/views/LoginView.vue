<template>
  <div class="container">
    <div>
        <h1><strong>Inicio de sesión</strong></h1>
        <p>
            Bienvenido al sistema de gestion de usuarios y contactos asignados. Por favor ingrese
            su nombre de usuario y contraseña para acceder a la aplicación web.
        </p>
    </div>
    <div class="container-login">
        <Form @submit="validateUser">
          <div class="form">
              <p>Usuario</p>
              <el-input v-model="user" placeholder="Ingrese su usuario" id="usuario"></el-input>
          </div>
          <div class="form">
              <p>Email</p>
              <el-input v-model="email" type="email" placeholder="Ingrese su email" show-password />
          </div>
          <div class="form">
            <button type="submit">Acceder</button>
              <!-- <el-button type="primary" size="default"><router-link to="/usuarios">Acceder</router-link></el-button>             -->
          </div>
        </Form>
    </div>
  </div>
</template>

<script setup>
    import { authenticateUser } from '@/services/authenticateUser';
    import { Form } from 'vee-validate';
    import { ref } from 'vue'

    const user = ref('')
    const email = ref('')

    const validateUser = () => {
      authenticateUser(user, email);
    }

</script>

<style scoped>
    .container {
        height: 50vh;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        border: 1px solid blue;
        border-radius: 15px;
        padding: 25px;
    }

    .container > div:first-child {
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
    }

    /* .row {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        border: 1px solid blue;
        border-radius: 15px;
        height: 80%;
    }

    .container-text {
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid blue;
    }

    .container-login {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form {
        height: 100px;
    }

    .form p {
        margin-bottom: 10px;
    } */
    
</style>
