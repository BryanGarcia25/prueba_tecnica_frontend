<template>
    <div>
        <h1>Lista de usuarios registrados</h1>
        <el-table :data="users" border style="width: 100%">
            <el-table-column fixed prop="id" label="ID" width="50" />
            <el-table-column prop="name" label="Nombre" width="200" />
            <el-table-column prop="email" label="Correo Electronico" width="200" />
            <el-table-column prop="contacts[0]['phone']" label="Teléfono" width="120" />
            <el-table-column prop="contacts[0]['references']" label="Referencias" width="250" />
            <el-table-column prop="createDate" label="Fecha de registro" width="150" />
            <el-table-column fixed="right" label="Operaciones" min-width="20">
            <template v-slot="userInfo">
                <el-button type="primary" size="default">Detalles</el-button>
                <el-button type="primary" size="default" @click="editUser(userInfo.row)">Editar</el-button>
                <el-button type="danger" size="default" @click="removeUser(userInfo.row)">Eliminar</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" size="default" @click="createUser()">Crear nuevo usuario</el-button>
        
    </div>
</template>

<script setup>
    import router from '@/router';
    import { getUsers } from '@/services/getUsers';
    import { removeUserById } from '@/services/removeUserById';
    import { ref } from 'vue';
    
    const users = ref();
    getUsers().then(resp => {
        users.value = resp;
    });

    const createUser = () => {
        router.push('/crear');
    }

    const editUser = (user) => {
        router.push(`/editar/${user.id}`)
    }

    const removeUser = (user) => {
        removeUserById(user.id);
    }

</script>

<style scoped>

</style>