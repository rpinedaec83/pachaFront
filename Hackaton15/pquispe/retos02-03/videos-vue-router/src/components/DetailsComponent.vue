<template>
  <main class="main">
    <h2 class="main__title">{{ video.title }}</h2>
    <div class="itemCard__videoContainer">
      <iframe :src="modifiedUrl(video.url)" :title="video.title" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <h3 class="main__title2">{{ video.title }}</h3>
    <span class="main__views">{{ viewsFormat(video.views) }} visualizaciones</span>
    <p class="main__description">{{ video.description }}</p>
  </main>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'DetailsComponent',
  data() {
    return {
      video: {}
    };
  },
  mounted() {
    axios.get('http://localhost:3000/videos/8')
      .then(response => {
        if (response.data) {
          this.video = response.data;
        }
      })
      .catch(error => {
        console.error(`Error al traer los datos: ${error}`);
      });
  },
  computed: {
    modifiedUrl() {
      return (url) => {
        if (url) {
          return url.replace('/watch?v=', '/embed/');
        }
      };
    },
    viewsFormat() {
      return (views) => {
        if (views) {
          return views.toLocaleString();
        }
      };
    }
  }
};
</script>
  
<style scoped>
.main {
  padding: 60px 30px 100px;
}

.main__title {
  color: #000;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 60px;
}

.itemCard__videoContainer {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  margin-bottom: 40px;
}

.itemCard__videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main__title2 {
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
}

.main__views {
  color: #303030;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
}

.main__description {
  color: #808080;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 15px;
}
</style>
