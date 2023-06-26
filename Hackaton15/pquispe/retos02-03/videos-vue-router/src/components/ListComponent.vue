<template>
  <HeaderComponent>
    <template v-slot:header-options>
      <div class="header__buttons">
        <button type="button" @click="addVideo">Agregar video</button>
      </div>
    </template>
  </HeaderComponent>
  <ItemsComponent :arrayVideos="arrayVideos" @modalDelete="showModalDelete"></ItemsComponent>
  <DeleteComponent v-if="modalDelete" @closeModal="hiddenModalDelete" @acceptModal="acceptModalDelete"></DeleteComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ItemsComponent from '@/components/ItemsComponent.vue';
import DeleteComponent from '@/components/DeleteComponent.vue';

export default {
  name: 'ListComponent',
  components: {
    HeaderComponent,
    ItemsComponent,
    DeleteComponent,
  },
  props: {
    arrayVideos: {
      type: Array,
      required: true,
    }
  },
  emits: ['acceptModalDelete'],
  data() {
    return {
      modalDelete: false,
      id_Video: null,
    };
  },
  methods: {
    addVideo() {
      this.$router.push({
        name: 'AddVideo',
      });
    },
    showModalDelete(idVideo) {
      this.modalDelete = true;
      this.id_Video = idVideo;
    },
    hiddenModalDelete() {
      this.modalDelete = false;
    },
    acceptModalDelete() {
      this.$emit('acceptModalDelete', this.id_Video);
      this.modalDelete = false;
    }
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
