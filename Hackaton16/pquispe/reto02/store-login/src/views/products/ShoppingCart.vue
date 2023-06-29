<template>
  <ul class="list-group mt-5">
    <li v-for="(product, index) in shopping" :key="index" class="list-group-item">
      <div class="row">
        <img :src="product.image" :alt="product.title" class="col-12 col-sm-3">
        <div class="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center gap-2">
          <h5 class="text-center">{{ product.title }}</h5>
          <p class="text-center">{{ product.description }}</p>
        </div>
        <div class="col-12 col-sm-3 d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-primary" @click="productsStore.deleteProduct(index), shoppingStore.getAllProducts()">
            Quitar del carrito
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useShoppingStore,  useProductsStore } from '@/stores';

const shoppingStore = useShoppingStore();
const { shopping } = storeToRefs(shoppingStore);

shoppingStore.getAllProducts();

const productsStore = useProductsStore();
</script>
