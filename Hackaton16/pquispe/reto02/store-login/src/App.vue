<template>
  <div class="container-fluid px-0" :class="authStore.user ? 'bg-light' : 'bg-dark'">
    <NavComponent></NavComponent>
    <AlertComponent></AlertComponent>

    <div class="container-fluid px-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { NavComponent, AlertComponent } from '@/components';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<style scoped></style>
