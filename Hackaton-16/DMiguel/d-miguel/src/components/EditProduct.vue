<template>
  <div>
    <h2>Editar producto</h2>
    <form @submit.prevent="updateProduct">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="editedProduct.name" required />

      <label for="price">Precio:</label>
      <input type="number" id="price" v-model="editedProduct.price" required />

      <button type="submit">Actualizar producto</button>
    </form>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/modules/products'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedProduct: { ...this.product }
    }
  },
  setup() {
    const productsStore = useProductsStore()

    return {
      updateProduct: () => {
        productsStore.updateProduct(this.editedProduct)
      }
    }
  }
}
</script>
