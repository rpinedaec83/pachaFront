<template>
  <HomeComponent v-if="arrayVideos.length == 0"></HomeComponent>
  <ListComponent v-else :arrayVideos="arrayVideos"></ListComponent>
</template>

<script>
import axios from 'axios';
import HomeComponent from '@/components/HomeComponent.vue';
import ListComponent from '@/components/ListComponent.vue';

export default {
  name: 'VideoList',
  components: {
    HomeComponent,
    ListComponent,
  },
  data() {
    return {
      arrayVideos: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/videos/')
      .then(response => {
        if (response.data) {
          this.arrayVideos = response.data;
        }
      })
      .catch(error => {
        console.error(`Error al traer los datos: ${error}`);
      });
  }
};
</script>

<style scoped></style>
