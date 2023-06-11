<template>
  <main class="main">
    <h2 class="main__title">Lista de videos</h2>
    <ul class="main__listCards">
      <li class="itemCard" v-for="video in arrayVideos" :key="video.id">
        <div class="editContainer">
          <img src="../assets/edit.svg" alt="edit icon">
        </div>
        <div class="deleteContainer">
          <img src="../assets/delete.svg" alt="delete icon">
        </div>
        <div class="itemCard__videoContainer">
          <iframe :src="video.url" :title="video.title" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="itemCard__infoContainer">
          <h3 class="itemCard__title">{{ video.title }}</h3>
          <span class="itemCard__views">{{ video.views.toLocaleString() }} visualizaciones</span>
          <p class="itemCard__description">{{ video.description }}</p>
          <button class="itemCard__button">Ver Detalle</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: {
    arrayVideos: Array
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.main {
  background-color: #fff;
  width: 100%;
  padding: 50px 0 100px;
}

.main__title {
  color: #000;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 36px;
  padding: 0 20px;
}

.main__listCards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 23px;
  row-gap: 20px;
  list-style: none;
}

.itemCard {
  position: relative;
  width: 100%;
  max-width: 255px;
  border: 1px solid #CFCFCF;
}

.itemCard:hover {
  border: 1px solid #FF5252;
  box-shadow: 0px 0px 8px rgba(146, 146, 146, 0.53);
}

.itemCard:hover .editContainer,
.itemCard:hover .deleteContainer {
  display: flex;
}

.itemCard__videoContainer {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
}

.itemCard__videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.itemCard__infoContainer {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 15px;
}

.itemCard__title {
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
}

.itemCard__views {
  color: #303030;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
}

.itemCard__description {
  color: #808080;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
}

.itemCard__button {
  background: #00C1AA;
  color: #fff;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

.editContainer,
.deleteContainer {
  background: #C4C4C4;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 8px;
  border-radius: 2px;
  z-index: 1;
  cursor: pointer;
}

.editContainer {
  left: 8px;
}

.deleteContainer {
  right: 8px;
}
</style>
