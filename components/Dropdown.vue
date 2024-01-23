<template>
    <div class="group text-white">
        <button class="outline-none focus:outline-none rounded-sm flex ">
            <span class="pr-1 font-semibold flex-1"> {{ mainLabel }} </span>
            <span>
                <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </span>
        </button>
        <ul
            class="bg-gray-300 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
            <li v-for="item in dropdownItems" :key="item.name"
                class="rounded-sm relative px-3 py-1 hover:bg-gray-100 text-black">
                <NuxtLink :to="`product-category/${item.name}`"
                    class="w-full text-left flex items-center outline-none focus:outline-none">
                    <span class="pr-1 flex-1"> {{ item.name }} </span>
                    <span class="mr-auto" v-if="item.submenu && item.submenu.length">
                        <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </span>
                </NuxtLink>
                <ul v-if="item.submenu && item.submenu.length"
                    class="bg-gray-300 border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                    <NuxtLink v-for="subitem in item.submenu" :key="subitem" class="px-3 py-1 hover:bg-gray-100 block"
                        :to="`product-category/${item.name}-${subitem}`">
                        {{ subitem }}
                    </NuxtLink>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

export default {
    name: "Dropdown",
    props: {
        mainLabel: {
            type: String,
            default: 'Options'
        },
        dropdownItems: {
            type: Array as () => Array<{ name: string, submenu?: string[] }>,
            default: () => [
                { name: 'Item 1', submenu: ['Subitem 1', 'Subitem 2'] },
                { name: 'Item 2' },
                { name: 'Item 3', submenu: ['Subitem 3', 'Subitem 4'] },
            ],
        },
    },
}
</script>


<style scoped>
.navbarbg {
    background-color: #1988ea;
}

.menubutton {
    background-color: inherit;
}

.menubutton:hover {
    background-color: #2670b1;
}

li>ul {
    transform: translatex(100%) scale(0)
}

li:hover>ul {
    transform: translatex(101%) scale(1)
}

li>button svg {
    transform: rotate(-90deg)
}

li:hover>button svg {
    transform: rotate(-270deg)
}


.group:hover .group-hover\:scale-100 {
    transform: scale(1)
}

.group:hover .group-hover\:-rotate-180 {
    transform: rotate(180deg)
}

.scale-0 {
    transform: scale(0)
}

.min-w-32 {
    min-width: 8rem
}
</style>