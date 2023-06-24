<template>
  <div>
    <button @click="fetchProducts">Cargar productos</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="removeProduct(product.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/modules/products'

export default {
  setup() {
    const productsStore = useProductsStore()

    return {
      products: productsStore.products,
      fetchProducts: productsStore.fetchProducts,
      removeProduct: productsStore.removeProduct
    }
  }
}
</script>
