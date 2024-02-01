<template>
    <div class="card bg-white shadow-md rounded-md p-4 border-gray-300 text-center w-72">
        <img :src="image" alt="Card image" class="card-image w-full h-48 object-cover rounded-md">
        <h2 class="card-title text-l mt-2">
            <NuxtLink :to="url" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ title }}</NuxtLink>
        </h2>
        <p class="card-description text-gray-700 mt-1">{{ description }}</p>
    </div>
</template>

<script lang="ts">


export default {
    name: 'Card',
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
        description: {
            type: String,
            required: false,
        },
    },
}
</script>


<style scoped></style>
