import { defineStore } from 'pinia';
import productsItems from '@/helpers/products.json';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    shopping: [],
  }),
  actions: {
    async addProducts() {
      this.products = productsItems;
      const items = JSON.parse(localStorage.getItem('shopping'));

      if (items != null && items.lenght != 0) {
        this.shopping = items;
        localStorage.setItem('shopping', JSON.stringify(this.shopping));
      }
    },
    async addShopping(productId) {
      const objetoEncontrado = this.products.find(objeto => objeto.id === productId);
      this.shopping.push(objetoEncontrado);
      localStorage.setItem('shopping', JSON.stringify(this.shopping));
    },
    async deleteProduct(productId) {
      const products = JSON.parse(localStorage.getItem('shopping'));
      products.splice(productId, 1);
      this.shopping = products;
      localStorage.setItem('shopping', JSON.stringify(this.shopping));
    }
  },
});
