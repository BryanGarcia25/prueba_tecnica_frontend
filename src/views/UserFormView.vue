<template>
    <div class="container">
        <div class="register-form">
            <el-card class="card">
                <div class="form">
                    <p>Ingrese su nombre de usuario</p>
                    <el-input placeholder="Nombre" />
                </div>
                <div class="form">
                    <p>Ingrese su correo electrónico</p>
                    <el-input placeholder="Correo electrónico" />
                </div>
                <div class="form">
                    <p>Ingrese el teléfono</p>
                    <el-input placeholder="Teléfono" />
                </div>
                <div class="form">
                    <p>Ingrese alguna referencia</p>
                    <el-input placeholder="Referencias" />
                </div>
                <div class="form">
                    <el-button type="primary" size="default"><router-link to="/usuarios">Registrar usuario</router-link></el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup>
    
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