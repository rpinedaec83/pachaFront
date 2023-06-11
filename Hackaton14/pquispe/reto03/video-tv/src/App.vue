<template>
  <HomeComponent v-if="arrayVideos.length == 0"></HomeComponent>
  <CrudComponent v-else :arrayVideos="arrayVideos"></CrudComponent>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
import CrudComponent from "@/components/CrudComponent.vue";

export default {
  name: 'App',
  components: {
    HomeComponent,
    CrudComponent
  },
  data() {
    return {
      arrayVideos: []
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      fetch(`http://localhost:3000/videos/`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          this.arrayVideos = data;
        })
        .catch(error => {
          console.error(`Error al traer los datos: ${error}`)
        });
    },
    async createVidio() {
      try {
        const response = await fetch(`http://localhost:3000/videos/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify()
        });
        const data = await response.json();
        await this.getVideos();
      } catch (error) {
        console.error(`Error al crear nuevo video: ${error}`)
      }
    },
    async updateVideo(index) {
      try {
        const response = await fetch(`http://localhost:3000/videos/${index}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify()
        });
        const data = await response.json();
        await this.getVideos();
      } catch (error) {
        console.error(`Error al editar video: ${error}`)
      }
    },
    async deleteVideo(index) {
      try {
        await fetch(`http://localhost:3000/videos/${index}`, {
          method: 'DELETE'
        });
        await this.getVideos();
      } catch (error) {
        console.log(`Error al eliminar el video: ${error}`)
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
}
</style>
