<template>
    <div class="container">
        <div class="register-form">
            <el-card class="card">
                <Form @submit="saveUser">
                    <div class="form">
                        <p>Ingrese su nombre de usuario</p>
                        <el-input v-model="information[0]" placeholder="Nombre" />
                    </div>
                    <div class="form">
                        <p>Ingrese su correo electrónico</p>
                        <el-input v-model="information[1]" placeholder="Correo electrónico" />
                    </div>
                    <div class="form">
                        <p>Ingrese el teléfono</p>
                        <el-input v-model="information[2]" placeholder="Teléfono" />
                    </div>
                    <div class="form">
                        <p>Ingrese alguna referencia</p>
                        <el-input v-model="information[3]" placeholder="Referencias" />
                    </div>
                    <div class="form">
                        <button type="submit">Registrar usuario</button>
                        <!-- <el-button type="primary" size="default"><router-link to="/usuarios">Registrar usuario</router-link></el-button> -->
                    </div>
                </Form>
            </el-card>
        </div>
    </div>
</template>

<script setup>
    import { sendUser } from '@/services/sendUser';
    import { Form } from 'vee-validate';
    import { ref } from 'vue';
    const information = ref([]);

    const saveUser = () => {
        sendUser(information);    
    }

    
</script>

<style scoped>
    .container {
        min-height: 100vh;
    }

    .register-form {
        width: 40%;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-bottom: 10px;
    }

    .form > p {
        margin-bottom: 5px;
    }

    .form:last-child {
        align-items: center;
    }


</style>