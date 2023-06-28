<template>
  <div class="container-fluid p-3 min-vh-100 d-flex justify-content-center align-items-center">
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores';
import { router } from '@/router';

const authStore = useAuthStore();
if (authStore.user) {
  router.push('/');
}
</script>

<style scoped></style>