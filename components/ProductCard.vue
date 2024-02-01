<!-- product card with image on top name and price and an add to cart button, all vertically stacked -->
<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="image" class="card-img-top" :alt="title">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ price }}</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductCard',
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
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