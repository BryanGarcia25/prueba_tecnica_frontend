<template>
    <div class="container">
        <div class="register-form">
            <el-card class="card">
                <Form :validation-schema="validate">
                    <div class="form">
                        <label for="name">Ingrese su nombre de usuario</label>
                        <Field name="name" id="name" v-model="information[0]" placeholder="Nombre"/>                    
                        <ErrorMessage name="name">El nombre es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="email">Ingrese su correo electrónico</label>
                        <Field name="email" id="email" v-model="information[1]" placeholder="Correo Electronico"/>  
                        <ErrorMessage name="email">El correo es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="phone">Ingrese su número telefónico</label>
                        <Field name="phone" id="phone" v-model="information[2]" placeholder="Teléfono"/>
                        <ErrorMessage name="phone">El correo es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="references">Ingrese alguna referencia</label>
                        <Field name="references" id="references" v-model="information[3]" placeholder="Referencias"/>
                        <ErrorMessage name="references">La referencia es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                         <el-button type="primary" size="default" @click="saveUser">Registrar Usuario</el-button>
                    </div>
                </Form>
            </el-card>
        </div>
    </div>
</template>

<script setup>
    import router from '@/router';
    import { sendUser } from '@/services/sendUser';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { ref } from 'vue';
    import { validate } from "@/modules/validateForm";

    const information = ref([]);

    const saveUser = () => {
        sendUser(information);
        router.push('/usuarios');
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