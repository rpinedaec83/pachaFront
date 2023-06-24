import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: []
  }),
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
    removeProduct(productId) {
      this.products = this.products.filter((product) => product.id !== productId)
    },
    updateProduct(updatedProduct) {
      const index = this.products.findIndex((product) => product.id === updatedProduct.id)
      if (index !== -1) {
        this.products[index] = updatedProduct
      }
    },
    async fetchProducts() {
      // Simula una llamada a una API
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Producto 1', price: 100 },
            { id: 2, name: 'Producto 2', price: 200 }
          ])
        }, 100)
      })

      this.setProducts(response)
    },
    setProducts(products) {
      this.products = products
    }
  }
})
