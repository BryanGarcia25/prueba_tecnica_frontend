<template>
    <div class="container">
        <h1>Lista de usuarios registrados</h1>
        <hr>
        <!-- Creando tabla para mostrar todos los usuarios registrados en nuestra base de datos -->
        <div class="table-users">
            <el-table :data="users" border style="width: 100%">
                <el-table-column fixed prop="id" label="ID" width="50" />
                <el-table-column prop="name" label="Nombre" width="180" />
                <el-table-column prop="email" label="Correo Electronico" width="200" />
                <el-table-column prop="contacts[0]['phone']" label="Teléfono" width="120" />
                <el-table-column prop="contacts[0]['references']" label="Referencias" width="225" />
                <el-table-column prop="createDate" label="Fecha de registro" width="200" />
                <el-table-column fixed="right" label="Operaciones" min-width="285">
                <!-- Botones para editar, mostrar detalles y eliminar un usuario en especifico -->
                <template v-slot="userInfo">
                    <el-button type="primary" size="default" @click="userDetails(userInfo.row)">Detalles</el-button>
                    <el-button type="primary" size="default" @click="editUser(userInfo.row)">Editar</el-button>
                    <el-button type="danger" size="default" @click="removeUser(userInfo.row)">Eliminar</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- Botón para crear un nuevo usuario -->
        <el-button type="primary" size="default" @click="createUser()">Crear nuevo usuario</el-button>
    </div>
</template>

<script setup>
    import router from '@/router';
    import { getUsers } from '@/services/getUsers';
    import { removeUserById } from '@/services/removeUserById';
    import { ElMessage, ElMessageBox } from 'element-plus';
    import { ref } from 'vue';

    const users = ref();

    // Método para obtener todos los usuarios registrados
    getUsers().then(resp => {
        // La respuesta es almacenada en una variable reactiva
        users.value = resp;
    });

    // Método para cambiar de pantalla con la ruta establecida
    const createUser = () => {
        router.push('/crear');
    }

    // Método para cambiar de pantalla con la ruta establecida enviando como parametro su id
    const userDetails = (user) => {
        router.push(`/detalle/${user.id}`);
    }

    // Método para cambiar de pantalla con la ruta establecida enviando como parametro su id
    const editUser = (user) => {
        router.push(`/editar/${user.id}`)
    }

    // Método para eliminar un usuario con la ruta establecida enviando como parametro su id
    const removeUser = (user) => {
        // Muestra un mensaje de confirmación sobre si queremos eliminar o no el usuario especificado
        ElMessageBox.confirm(
            "¿Estas seguro que quieres eliminar este usuario?",
            "Atención",
            {
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }
        ).then(() => {
            // En caso de que se haya confirmado nos muestra un mensaje de que el usuario fue eliminado
            removeUserById(user.id);
            ElMessage({
                type: 'success',
                message: 'Usuario eliminado'
            });
            router.push('/usuarios')
        }).catch(() => {
            // En caso de que se haya cancelado nos muestra un mensaje de que el usuario no fue eliminado
            ElMessage({
                type: 'info',
                message: 'Usuario no eliminado'
            });
        })
    }

</script>

<style scoped>
    .container {
        padding: 20px 10px;
    }

    .table-users {
        margin: 30px 0;
    }
</style>