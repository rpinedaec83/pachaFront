<template>
  <main-view  @redirect="agregarEditarVideo"></main-view>
</template>
<script>
import MainView from '../view/MainView.vue';

export default {
  name: 'HomeView',
  components: {
    MainView
  },
  methods: {
    agregarEditarVideo(tipoModal) {
      switch (tipoModal) {
        case 'agregar':
          this.$redirectPagination(this.$router, 'crearVideo');
          break;
        case 'editar':
          this.$redirectPagination(this.$router, 'editarVideo', { id: 1 });
          break;
      }
    }
  }
}
</script>
<style lang="scss">

</style>