<template>
  <div v-if="user" class="container">
    <h1 class="mt-5">Hola {{ user.firstName }}!</h1>
    <p class="mt-2 mb-5">¡Bienvenido de vuelta! ¡Nos alegra verte aquí!</p>
    <div class="d-flex gap-3 flex-wrap pb-5">
      <router-link to="/users" class="btn btn-primary">Administrar usuarios</router-link>
      <router-link to="/products" class="btn btn-primary">Ver productos</router-link>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<style scoped></style>
