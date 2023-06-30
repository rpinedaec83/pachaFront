<template>
  <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark px-3">
    <div class="navbar-nav">
      <router-link to="/" class="nav-item nav-link">Home</router-link>
      <router-link to="/users" class="nav-item nav-link">Usuarios</router-link>
      <router-link to="/products" class="nav-item nav-link">Productos</router-link>
      <button @click="authStore.logout()" class="btn btn-link nav-item nav-link">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<style scoped></style>