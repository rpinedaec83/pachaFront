<template>
  <HeaderComponent>
    <template v-slot:header-options>
      <div class="header__buttons">
        <button type="button" @click="videoList">Ver mapa</button>
      </div>
    </template>
  </HeaderComponent>
  <UpdateComponent :video="video"></UpdateComponent>
</template>
      
<script>
import axios from 'axios';
import HeaderComponent from '@/components/HeaderComponent.vue';
import UpdateComponent from '@/components/UpdateComponent.vue';

export default {
  name: 'UpdateVideo',
  components: {
    HeaderComponent,
    UpdateComponent,
  },
  data() {
    return {
      video: {},
    };
  },
  methods: {
    videoList() {
      this.$router.push({
        name: 'VideoList',
      });
    }
  },
  mounted() {
    const id_video = this.$route.params.id_video;

    axios.get(`http://localhost:3000/videos/${id_video}`)
      .then(response => {
        if (response.data) {
          this.video = response.data;
        }
      })
      .catch(error => {
        console.error(`Error al traer los datos: ${error}`);
      })
  }
};
</script>
      
<style scoped>
.header__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

.header__buttons button {
  background-color: #FF5252;
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  border: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
      