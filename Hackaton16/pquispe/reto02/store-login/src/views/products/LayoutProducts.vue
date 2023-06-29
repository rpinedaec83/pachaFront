<template>
  <div class="container py-5">
    <div class="row">
      <router-link to="/products" class="nav-item nav-link col-6 text-center">
        <button type="button" class="btn btn-success">Productos</button>
      </router-link>
      <router-link to="/products/shopping-cart" class="nav-item nav-link col-6 text-center">
        <button type="button" class="btn btn-success">Carrito de compras</button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup></script>
