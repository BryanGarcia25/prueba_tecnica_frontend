<template>
    <div class="container">
        <div class="register-form">
            <el-card class="card">
                <!-- Formulario para registrar todos los atributos del nuevo usuario -->
                <Form :validation-schema="validate">
                    <div class="form">
                        <label for="name">Ingrese su nombre de usuario</label>
                        <Field class="field" name="name" id="name" v-model="information[0]" placeholder="Nombre"/>
                        <ErrorMessage name="name">El nombre es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="email">Ingrese su correo electrónico</label>
                        <Field class="field" name="email" id="email" v-model="information[1]" placeholder="Correo Electronico"/>
                        <ErrorMessage style="color: red; font-weight: bold; font-size: 18px" name="email">El correo es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="phone">Ingrese su número telefónico</label>
                        <Field class="field" name="phone" id="phone" v-model="information[2]" placeholder="Teléfono"/>
                        <ErrorMessage name="phone">El correo es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                        <label for="references">Ingrese alguna referencia</label>
                        <Field class="field" name="references" id="references" v-model="information[3]" placeholder="Referencias"/>
                        <ErrorMessage name="references">La referencia es obligatorio</ErrorMessage>
                    </div>
                    <div class="form">
                         <el-button class="button" type="primary" size="default" @click="saveUser">Registrar Usuario</el-button>
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
    import { ElMessage, ElMessageBox } from 'element-plus';

    // Creando lista reactiva para almacenar la información del usuario
    const information = ref([]);

    // Método para guardar el usuario en la base de datos
    const saveUser = () => {
        // Para validar que todos los campos fueron llenados correctamente la lista debe tener un tamaño igual a 4
        if (information.value.length === 4) {
            // Enviamos la información del usuario
            sendUser(information);
            // Muestra un mensaje de exitoso al momento de reigstrar el usuario
            ElMessage({
                message: 'El usuario ha sido registrado correctamente',
                type: 'success'
            })
            // Retorna a la pantalla de lista de usuarios
            router.push('/usuarios');            
        } else {
            // En caso de que la lista no sea igual a 4 nos muestra una advertencia de que faltan campos por llenar
            ElMessageBox.alert(
            "Faltan campos por llenar",
            "Atención",
            {
                confirmButtonText: 'Ok',
                type: 'warning'
            }
        )
        }        
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

    @media screen and (max-width: 767px) {
        .register-form {
            display: block;
            width: 100%;
            padding: 0px 15px;
        }

        .form > label {
            font-size: 16px;
        }

        .form > .field {
            font-size: 14px;
        }

        .form > .button {
            font-size: 16px;
            padding: 15px;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .register-form {
            display: block;
            width: 100%;
            padding: 0px 15px;
        }

        .form > label {
            font-size: 18px;
        }

        .form > .field {
            font-size: 16px;
        }

        .form > .button {
            font-size: 20px;
            padding: 20px;
        }
    }

</style>