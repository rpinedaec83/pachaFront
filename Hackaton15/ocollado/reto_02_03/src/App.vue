<template>
  <header-view :titulo="titulo" v-model:showHeader="showHeader"></header-view>
  <router-view @watch-videos="onWatchVideos"/>
</template>

<script>
import HeaderView from './view/HeaderView.vue';

export default {
  components: {
    HeaderView
  },
  name: 'App',
  data() {
    return {
      titulo: "VIDEO PACHA TV",
      showHeader: false
    }
  },
  methods: {
    onWatchVideos(value) {
      this.showHeader = value;
    }
  }
}
</script>

<style></style>
