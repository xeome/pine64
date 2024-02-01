<template>
    <div class="carousel-container">
        <h1 class="text-center text-3xl font-bold text-blue mb-8">Popular Accessories</h1>

        <div class="carousel-wrapper w-full flex justify-between">
            <button @click="prevPage" class="carousel-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            <Card v-for="(item, index) in visibleItems" :key="index" :image="item.image" :title="item.title"
                :url="item.url" />

            <button @click="nextPage" class="carousel-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>

        </div>
        <div class="carousel-dots">
            <span v-for="itemIndex in Math.max(items.length - 4, 0)" :key="itemIndex"
                :class="{ active: itemIndex === currentItem + 1 }" @click="goToPage(itemIndex - 1)"></span>
        </div>
    </div>
</template>

<script lang="ts">
import Card from './Card.vue';
import { useDataStore } from '@/stores/data'

let currentItem = ref(0);
let itemsPerPage = ref(0);
let items = ref<CarouselItem[]>([]);

interface CarouselItem {
    image: string;
    title: string;
    url: string;
}

export default defineComponent({
    name: 'Carousel',
    components: {
        Card,
    },

    setup() {
        const dataStore = useDataStore();
        dataStore.fetchItems().then(() => {
            items.value = dataStore.items;
            itemsPerPage.value = dataStore.itemsPerPage;
        });
    },

    data() {
        return {
            currentItem,
            itemsPerPage,
            items,
        };
    },

    computed: {
        visibleItems(): CarouselItem[] {
            const startIndex = this.currentItem;
            return this.items.slice(startIndex, startIndex + this.itemsPerPage);
        },
        totalPages(): number {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
    },
    methods: {
        nextPage(): void {
            this.goToPage(this.currentItem + 1);
        },
        prevPage(): void {
            this.goToPage(this.currentItem - 1);
        },
        goToPage(page: number): void {
            const length = this.items.length;
            this.currentItem = (page + length) % (length - 4);;
        },
    },
});
</script>

<style scoped>
.carousel-wrapper {
    display: flex;
    overflow: hidden;
    transition: transform 0.5s ease;
}

.carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
}

.carousel-button {
    margin-top: 10px;
    padding: 8px;
    color: #4299e1;
    border: none;
    font-weight: 900;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.carousel-dots span {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #ccc;
    display: inline-block;
    cursor: pointer;
}

.carousel-dots span.active {
    background-color: #4299e1;
}
</style>