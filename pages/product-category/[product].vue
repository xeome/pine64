<template>
    <!-- Main container with title result count and products bellow it -->
    <main class="container mx-auto mt-24 px-32">
        <!-- breadcrumb path here -->
        <nav class="text-sm text-slate-600 my-8" aria-label="Breadcrumb">
            <ol class="list-none p-0 inline-flex">
                <li class="flex items">
                    <!-- home/product name -->
                    <NuxtLink to="/">Home</NuxtLink>

                    /

                    {{ $route.params.product }}

                </li>
            </ol>
        </nav>
        <!-- use $route.params.product for product name -->
        <h1 class="text-3xl font-bold text-gray-600">
            {{ $route.params.product }}
        </h1>

        <ProductTable />

    </main>
</template>

<script setup>
const route = useRoute()
console.log(route.params) // { id: '123' }
</script>