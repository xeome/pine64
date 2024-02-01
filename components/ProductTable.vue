<!-- ProductGrid.vue -->

<template>
    <div class="grid grid-cols-4 gap-4">
        <Product v-for="product in products" :key="product.id" :image="product.image" :title="product.title"
            :url="product.url" :price="product.price" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Product from '~/components/Product.vue';
import { useProductStore } from '~/stores/product'; // Adjust the path accordingly

export default defineComponent({
    name: 'ProductGrid',
    components: {
        Product,
    },

    setup() {
        const productStore = useProductStore();

        // Using refs to make the data reactive
        const products = ref(productStore.products);

        onMounted(async () => {
            await productStore.fetchProducts();
            products.value = productStore.products;
        });

        return {
            products,
        };
    },
});
</script>