<script setup>
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Inicio</router-link>
            <router-link to="/users" class="nav-item nav-link">Usuarios</router-link>
            <router-link to="/tienda" class="nav-item nav-link">Tienda</router-link>
            <button @click="authStore.logout()" class="btn btn-link nav-item nav-link">Cerrar Sesión</button>
        </div>
    </nav>
</template>