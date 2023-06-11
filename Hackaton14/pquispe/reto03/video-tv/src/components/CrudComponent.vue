<template>
  <HeaderComponent>
    <template #header-options>
      <div class="header__buttons">
        <button>Ver mapa</button>
        <button>Agregar video</button>
      </div>
    </template>
  </HeaderComponent>
  <ListCards :arrayVideos="arrayVideos"></ListCards>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ListCards from "@/components/ListCards.vue";

export default {
  props: {
    arrayVideos: Array
  },
  components: {
    HeaderComponent,
    ListCards
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.header__buttons {
  display: flex;
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
