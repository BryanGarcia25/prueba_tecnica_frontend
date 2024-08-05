<template>
    <div class="container">
        <h1>Lista de usuarios registrados</h1>
        <hr>
        <div class="table-users">
            <el-table :data="users" border style="width: 100%">
                <el-table-column fixed prop="id" label="ID" width="50" />
                <el-table-column prop="name" label="Nombre" width="180" />
                <el-table-column prop="email" label="Correo Electronico" width="200" />
                <el-table-column prop="contacts[0]['phone']" label="Teléfono" width="120" />
                <el-table-column prop="contacts[0]['references']" label="Referencias" width="225" />
                <el-table-column prop="createDate" label="Fecha de registro" width="200" />
                <el-table-column fixed="right" label="Operaciones" min-width="285">
                <template v-slot="userInfo">
                    <el-button type="primary" size="default" @click="userDetails(userInfo.row)">Detalles</el-button>
                    <el-button type="primary" size="default" @click="editUser(userInfo.row)">Editar</el-button>
                    <el-button type="danger" size="default" @click="removeUser(userInfo.row)">Eliminar</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
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
    getUsers().then(resp => {
        users.value = resp;
    });

    const createUser = () => {
        router.push('/crear');
    }

    const userDetails = (user) => {
        router.push(`/detalle/${user.id}`);
    }

    const editUser = (user) => {
        router.push(`/editar/${user.id}`)
    }

    const removeUser = (user) => {
        ElMessageBox.confirm(
            "¿Estas seguro que quieres eliminar este usuario?",
            "Atención",
            {
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }
        ).then(() => {
            removeUserById(user.id);
            ElMessage({
                type: 'success',
                message: 'Usuario eliminado'
            });
            router.push('/usuarios')
        }).catch(() => {
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