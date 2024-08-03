<template>
    <div class="container">
        <div class="register-form">
            <el-card class="card">
                <Form @submit="editUser">
                    <div class="form">
                        <p>Ingrese su nombre de usuario</p>
                        <el-input v-model="information['name']" placeholder="Nombre" />
                    </div>
                    <div class="form">
                        <p>Ingrese su correo electrónico</p>
                        <el-input v-model="information['email']" placeholder="Correo electrónico" />
                    </div>
                    <div class="form">
                        <p>Ingrese el teléfono</p>
                        <el-input v-model="phoneUser" placeholder="Teléfono" />
                    </div>
                    <div class="form">
                        <p>Ingrese alguna referencia</p>
                        <el-input v-model="referencesUser" placeholder="Referencias" />
                    </div>
                    <div class="form">
                        <button type="submit">Editar usuario</button>
                    </div>
                </Form>
            </el-card>
        </div>
    </div>
</template>

<script setup>
    import { getUserById } from '@/services/getUserById';
    import { useRoute } from 'vue-router';
    import { Form } from 'vee-validate';
    import { ref } from 'vue';
    import { updateUser } from '@/services/updateUserById';

    const information = ref([]);
    const phoneUser = ref('');
    const referencesUser = ref('');
    const route = useRoute();
    getUserById(route.params.id).then(resp => {
        information.value = resp
        phoneUser.value = information.value['contacts'][0]['phone'];
        referencesUser.value = information.value['contacts'][0]['references'];
    });

    // import { sendUser } from '@/services/sendUser';



    const editUser = () => {
        // console.log(information.value['contacts'][0]['phone']);
        information.value['contacts'][0]['phone'] = phoneUser.value;
        information.value['contacts'][0]['references'] = referencesUser.value;
        // console.log(information.value['contacts'][0]['phone']);
        updateUser(information);
        // sendUser(information);
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