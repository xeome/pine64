<template>
    <div class="container mx-auto bg-gray-200 min-w-full p-5">
        <h1 class="text-center text-3xl font-bold text-blue mb-8">Awesome Community Driven Projects</h1>
        <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                <ProductCard image="/assets/PineTimeRIOT.png"
                    description="The PineTime is a free and open source smartwatch capable of running custom-built open operating systems. It is a fully community driven side-project from the ground up; all we do is facilitate the development process and provide the hardware." />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                <ProductCard image="/assets/PineCubeS.png"
                    description="The PineCube is a small, Low-powered and Open Source and IP camera. Whether you’re a parent looking for a FOSS baby-camera, a privacy oriented shop keeper or a home owner looking for a security camera – the PineCube may just be the answer. " />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
                <ProductCard image="/assets/pinecil_Pine_store.png"
                    description="Pinecil – a RISC-V powered, open and versatile soldering iron. It can be powered via USB-C PD as well as a DC5525 jack, and runs community developed software. Moreover, it is compatible with popular TS-100 tips. All this at half the price of the competition." />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
    name: 'ProductTray',
    components: {
        ProductCard,
    },
});
</script>
