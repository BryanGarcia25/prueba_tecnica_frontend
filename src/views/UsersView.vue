<template>
    <div>
        <h1>Lista de usuarios registrados</h1>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="id" label="ID" width="50" />
            <el-table-column prop="name" label="Nombre" width="200" />
            <el-table-column prop="email" label="Correo Electronico" width="200" />
            <el-table-column prop="contact[0]['telephone']" label="Teléfono" width="120" />
            <el-table-column prop="contact[0]['address']" label="Referencias" width="250" />
            <el-table-column prop="date" label="Fecha de registro" width="150" />
            <el-table-column fixed="right" label="Operaciones" min-width="20">
            <template #default>
                <el-button type="primary" size="default">Detalles</el-button>
                <!-- <el-button type="primary" size="default" @click="handleClick">Detail</el-button> -->
                <el-button type="primary" size="default">Editar</el-button>
                <el-button type="danger" size="default">Eliminar</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" size="default"><router-link to="/crear">Crear nuevo usuario</router-link></el-button>
        
    </div>
</template>

<script setup>
    const tableData = [
    {
        id: 1,
        date: '2016-05-03',
        name: 'Tom',
        email: 'example@example.com',
        contact: [
            {
                id: 1,
                name: 'Edwards',
                telephone: 712839273,
                email: 'example@example.com',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'Tom',
        email: 'example@example.com',
        contact: [
            {
                id: 2,
                name: 'Edwards',
                telephone: 213123123,
                email: 'example@example.com',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'Tom',
        email: 'example@example.com',
        contact: [
            {
                id: 3,
                name: 'Edwards',
                telephone: 231329273,
                email: 'example@example.com',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
    },
    {
        id: 4,
        date: '2016-05-01',
        name: 'Tom',
        email: 'example@example.com',
        contact: [
            {
                id: 4,
                name: 'Edwards',
                telephone: 213343849,
                email: 'example@example.com',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
    },
    ]
</script>

<style scoped>

</style>