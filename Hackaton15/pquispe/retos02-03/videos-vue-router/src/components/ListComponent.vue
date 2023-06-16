<template>
  <HeaderComponent>
    <template v-slot:header-options>
      <div class="header__buttons">
        <button type="button">Agregar video</button>
      </div>
    </template>
  </HeaderComponent>
  <ItemsComponent :arrayVideos="arrayVideos"></ItemsComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ItemsComponent from '@/components/ItemsComponent.vue';

export default {
  name: 'ListComponent',
  props: {
    arrayVideos: Array
  },
  components: {
    HeaderComponent,
    ItemsComponent,
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
