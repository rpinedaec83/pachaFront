<template>
  <div id="app">
    <AddProduct />
    <ProductList />
    <EditProduct />
  </div>
</template>

<script>
import AddProduct from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'
import EditProduct from './components/EditProduct.vue'

export default {
  name: 'App',
  components: {
    AddProduct,
    ProductList,
    EditProduct
  }
}
</script>
