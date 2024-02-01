import { defineStore } from "pinia";

interface CarouselItem {
  image: string;
  title: string;
  url: string;
}

interface CarouselDataState {
  itemsPerPage: number;
  items: CarouselItem[];
}

interface CarouselDataStore {
  increment: () => void;
  fetchItems: () => Promise<void>;
}

export const useDataStore = defineStore("carousel-data", {
  state: (): CarouselDataState => {
    return {
      itemsPerPage: 5,
      items: [],
    };
  },

  actions: {
    increment() { },

    async fetchItems() {
      const response = await fetch('http://localhost:3000/api/carousel');

      const data = await response.json();
      this.items = data.map((item: any) => ({
        image: item.image,
        title: item.title,
        url: item.url,
      }));
    },
    onMounted() {
      this.fetchItems();
    },
  },
});