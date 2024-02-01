<template>
    <div class="card bg-white rounded-md p-4 border-gray-300 text-center w-72">
        <img :src="image" alt="Card image" class="card-image
        w-full h-48 object-contain rounded-md">
        <h2 class="card-title text-l mt-2">
            <NuxtLink :to="url" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ title }}</NuxtLink>
        </h2>
        <p class="card-price text-gray-700 mt-1">{{ price }}$</p>
        <button class="bg-gray-200 hover:bg-gray-300 text-slate-700 font-bold py-2 px-4 rounded">
            Add to Cart
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Product',
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
    },
})

</script>

<style>
.card {
    background-color: #f7fafc;
}

.card-image {
    background-color: #f7fafc;
}

.card-title {
    background-color: #f7fafc;
}

.card-description {
    background-color: #f7fafc;
}

.card-price {
    background-color: #f7fafc;
}
</style>

