<template>
    <div class="carousel-container">
        <div class="carousel-wrapper">

            <button @click="prevPage" class="carousel-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            <Card v-for="(item, index) in visibleItems" :key="index" :image="item.image" :title="item.title"
                :description="item.description" />

            <button @click="nextPage" class="carousel-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>


        </div>
        <div class="carousel-dots">
            <span v-for="itemIndex in items.length - 4" :key="itemIndex" :class="{ active: itemIndex === currentItem + 1 }"
                @click="goToPage(itemIndex - 1)"></span>
        </div>
    </div>
</template>


<script lang="ts">
import Card from './Card.vue';

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
    data(): { currentItem: Ref<number>; itemsPerPage: number; items: CarouselItem[] } {

        return {
            currentItem: ref(0),
            itemsPerPage: 5,
            items: [
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 1',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 2',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 3',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 4',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 5',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 6',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 7',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                },
                {
                    image: '/assets/emmcModule.png',
                    title: 'Card 8',
                    url: 'https://pine64.com/product-category/pinebook-pro-accessories/'
                }
            ],
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
            const lastItem = this.items.length - 1;
            this.currentItem = Math.min(Math.max(page, 0), lastItem - 4);
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