<template>
  <HeaderComponent></HeaderComponent>
  <main class="main">
    <button type="button" @click="addVideo">Agregar video</button>
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'HomeComponent',
  components: {
    HeaderComponent,
  },
  methods: {
    addVideo() {
      this.$router.push({
        name: 'AddVideo',
      });
    },
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 8.3rem);
}

.main button {
  background: #FF5252;
  color: #fff;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  border: none;
  padding: 28px 42px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
