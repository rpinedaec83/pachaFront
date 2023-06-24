<template>
  <div>
    <h2>Agregar producto</h2>
    <form @submit.prevent="addProduct">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="newProduct.name" required />

      <label for="price">Precio:</label>
      <input type="number" id="price" v-model="newProduct.price" required />

      <button type="submit">Agregar producto</button>
    </form>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/modules/products'

export default {
  data() {
    return {
      newProduct: {
        name: '',
        price: 0
      }
    }
  },
  setup() {
    const productsStore = useProductsStore()

    return {
      addProduct: () => {
        productsStore.addProduct({ ...this.newProduct, id: Date.now() })
        this.newProduct.name = ''
        this.newProduct.price = 0
      }
    }
  }
}
</script>
