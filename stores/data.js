import { defineStore } from "pinia";

export const useDataStore = defineStore("carousel-data", {
  state: () => {
    return {
      itemsPerPage: 5,
      items: [
        {
          image: "/assets/emmcModule.png",
          title: "Card 1",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 2",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 3",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 4",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 5",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 6",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 7",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
        {
          image: "/assets/emmcModule.png",
          title: "Card 8",
          url: "https://pine64.com/product-category/pinebook-pro-accessories/",
        },
      ],
    };
  },

  actions: {
    increment() { },
  },
});
