<template>
  <main class="main">
    <h1 class="main__title">404</h1>
    <p class="main__description">Página no encontrada</p>
    <button type="button" @click="videoList">Volver a la página principal</button>
  </main>
</template>
        
<script>
export default {
  name: 'NotFound',
  methods: {
    videoList() {
      this.$router.push({
        name: 'VideoList',
      });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
        
<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main__title {
  font-size: 8.0rem;
  color: #FF5252;
  margin-bottom: 20px;
}

.main__description {
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 30px;
}

.main button {
  background: #FF5252;
  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 12px 35px;
  border: none;
  cursor: pointer;
}
</style>
        