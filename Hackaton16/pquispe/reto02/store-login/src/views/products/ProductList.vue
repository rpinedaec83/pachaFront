<template>
  <ul class="mt-5 d-flex justify-content-center gap-5 flex-wrap p-0">
    <li v-for="product in products" :key="product.id" class="card" style="width: 18rem;">
      <img :src="product.image" class="card-img-top" :alt="product.title">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <button type="button" class="btn btn-primary" @click="productsStore.addShopping(product.id)">
          Agregar al carrito
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '@/stores';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);

productsStore.addProducts();
</script>
