<template>
  <header-view :titulo=titulo @abrir-modal="openModalVideo"></header-view>
  <main-view @abrir-modal="openModalVideo"></main-view>
  <modal-video-page ref="modalVideoPage"></modal-video-page>
</template>
<script>

import HeaderView from '../view/HeaderView.vue';
import MainView from '../view/MainView.vue';
import ModalVideoPage from '../components/pages/video-page/ModalVideoPage.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    MainView,
    ModalVideoPage
  },
  data() {
    return {
      titulo: "VIDEO PACHA TV"
    }
  },
  methods: {
    openModalVideo(tipoModal) {
      switch (tipoModal) {
        case 'nuevo':
          this.$refs.modalVideoPage.show();
          break;
        case 'editar':
          this.$refs.modalVideoPage.show();
          break;
        case 'eliminar':
          break;
      }
    }
  }
}
</script>
<style lang="scss"></style>