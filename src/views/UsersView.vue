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
            <template #default>
                <el-button type="primary" size="default">Detalles</el-button>
                <el-button type="primary" size="default"><router-link :to="{path: `/editar/${users[0]['id']}`}">Editar</router-link></el-button>
                <el-button type="danger" size="default" @click="remove(users[0]['id'])"><router-link to="/usuarios">Eliminar</router-link></el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" size="default"><router-link to="/crear">Crear nuevo usuario</router-link></el-button>
        
    </div>
</template>

<script setup>
    import { getUsers } from '@/services/getUsers';
import { removeUserById } from '@/services/removeUserById';
    import { ref } from 'vue';
    
    const users = ref();
    getUsers().then(resp => {
        users.value = resp;
    });

    const remove = (id) => {
        console.log(id);
        removeUserById(id);
    }

    // removeUser((id) => {
    //     removeUserById(id);
    // })


</script>

<style scoped>

</style>