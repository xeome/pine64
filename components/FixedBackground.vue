<template>
    <div class="fixed-background" :style="{ backgroundImage: 'url(' + bgimage + ')' }">
        <div class="fixed-background__overlay ">
            <div class="fixed-background__overlay__text text-white">
                <h1 class="text-3xl font-bold uppercase tracking-wider mb-4">{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
            <div
                class="fixed-background__overlay__button-container flex justify-center items-end absolute bottom-0 left-0 right-0 mb-8">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FixedBackground',
    props: {
        bgimage: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
})
</script>

<style scoped>
.fixed-background {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #000;
    filter: contrast(0.8);
}

.fixed-background__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
}

.fixed-background__overlay__text {
    position: relative;
    top: 15%;
    left: 3%;
    color: #fff;
    text-align: left;
}

.fixed-background__overlay__text h1 {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1rem;
    margin: 0;
}
</style>
