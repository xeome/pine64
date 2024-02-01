// ProductStore.ts

import { defineStore } from 'pinia';

interface Product {
  id: number;
  image: string;
  title: string;
  url: string;
  price: string;
}

interface ProductGridState {
  products: Product[];
}

interface ProductGridStore {
  fetchProducts: () => Promise<void>;
}

export const useProductStore = defineStore('product-grid', {
  state: (): ProductGridState => {
    return {
      products: [],
    };
  },

  actions: {
    async fetchProducts() {
      // Replace the following URL with your actual API endpoint
      const response = await fetch('http://localhost:3000/api/products');

      const data = await response.json();
      this.products = data.map((item: any) => ({
        id: item.id,
        image: item.image,
        title: item.title,
        url: item.url,
        price: item.price,
      }));
    },

    onMounted() {
      this.fetchProducts();
    },
  },
});
