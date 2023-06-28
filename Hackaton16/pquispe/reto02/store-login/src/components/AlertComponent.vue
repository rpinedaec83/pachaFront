<template>
  <div v-if="alert">
    <div class="alert alert-dismissible" :class="alert.type" role="alert">
      {{ alert.message }}
      <button @click="alertStore.clear()" type="button" class="btn-close"></button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useAlertStore } from '@/stores';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<style scoped></style>