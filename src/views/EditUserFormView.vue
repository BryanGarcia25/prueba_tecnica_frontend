<template>
    <div class="container">
        <div class="register-form">
            <el-card class="card">
                <Form :validation-schema="validate">
                    <div class="form">
                        <label for="name">Ingrese su nombre de usuario</label>
                        <Field class="field" name="name" id="name" v-model="information['name']" placeholder="Nombre"/>
                        <ErrorMessage name="name">El nombre es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="email">Ingrese su correo electrónico</label>
                        <Field class="field" name="email" id="email" v-model="information['email']" placeholder="Correo Electronico"/>  
                        <ErrorMessage name="email">El correo es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="phone">Ingrese su número telefónico</label>
                        <Field class="field" name="phone" id="phone" v-model="phoneUser" placeholder="Teléfono"/>
                        <ErrorMessage name="phone">El correo es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="references">Ingrese alguna referencia</label>
                        <Field class="field" name="references" id="references" v-model="referencesUser" placeholder="Referencias"/>
                        <ErrorMessage name="references">La referencia es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                         <el-button class="button" type="primary" size="default" @click="editUser">Editar Usuario</el-button>
                    </div>
                </Form>
            </el-card>
        </div>
    </div>
</template>

<script setup>
    import { getUserById } from '@/services/getUserById';
    import { useRoute } from 'vue-router';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { ref } from 'vue';
    import { updateUser } from '@/services/updateUserById';
    import { validate } from "@/modules/validateForm";
    import { ElMessage } from 'element-plus';
    import router from '@/router';

    const information = ref([]);
    const phoneUser = ref('');
    const referencesUser = ref('');
    const route = useRoute();
    
    getUserById(route.params.id).then(resp => {
        information.value = resp;
        phoneUser.value = information.value['contacts'][0]['phone'];
        referencesUser.value = information.value['contacts'][0]['references'];
    });

    const editUser = () => {
        information.value['contacts'][0]['phone'] = phoneUser.value;
        information.value['contacts'][0]['references'] = referencesUser.value;
        updateUser(information);
        ElMessage({
            message: 'El usuario ha sido actualizado correctamente',
            type: 'success'
        });
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

    .form > label {
        font-size: 24px;
    }

    .form > .field {
        padding: 10px;
        margin: 5px 0px;
        font-size: 20px;
    }

    .form > .button {
        font-size: 24px;
        padding: 20px;
    }


</style>