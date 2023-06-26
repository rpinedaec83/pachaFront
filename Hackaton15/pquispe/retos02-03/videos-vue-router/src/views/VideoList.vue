<template>
  <HomeComponent v-if="arrayVideos.length == 0"></HomeComponent>
  <ListComponent v-else :arrayVideos="arrayVideos" @acceptModalDelete="deleteVideo"></ListComponent>
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
  methods: {
    async deleteVideo(idVideo) {
      const deleteData = await axios.delete(`http://localhost:3000/videos/${idVideo}`)
        .catch(error => {
          console.error(`Error al eliminar el video: ${error}`);
        });
      const getData = await axios.get('http://localhost:3000/videos/')
        .then(response => {
          if (response.data) {
            this.arrayVideos = response.data;
          }
        })
        .catch(error => {
          console.error(`Error al traer los datos: ${error}`);
        });
      
      return {
        deleteData,
        getData
      };
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    
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
