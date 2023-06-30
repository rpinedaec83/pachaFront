import { defineStore } from 'pinia';

export const useShoppingStore = defineStore({
  id: 'shopping',
  state: () => ({
    shopping: [],
  }),
  actions: {
    async getAllProducts() {
      this.shopping = JSON.parse(localStorage.getItem('shopping'));
    }
  },
});
