<template>
    <div class="flex justify-center bg-gray-200 h-20 fixed w-full header">
        <nav class="bg-white h-14 w-3/5 px-5 ">
            <div class="h-full navbar flex">
                <ul class="h-full justify-between flex flex-row w-full">
                    <NuxtLink to="/" class="home flex text-white font-semibold justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span>Home</span>
                    </NuxtLink>

                    <div v-for="dropdown in dropdowns" :key="dropdown.mainLabel" class="h-full">
                        <li class="h-full flex items-center menubutton">
                            <Dropdown :mainLabel="dropdown.mainLabel" :dropdownItems="dropdown.dropdownItems" />
                        </li>
                    </div>

                    <NuxtLink to="/cart" class="flex text-white font-semibold justify-between items-center ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                        <span>Cart</span>
                    </NuxtLink>

                    <!-- Shopping cart element -->

                </ul>
            </div>
            <div class="flex justify-items-end">
                <NuxtLink to="/shop" class="ml-auto px-1 py-0 shop">
                    0 Items $0.00
                </NuxtLink>
            </div>

        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dropdown from './Dropdown.vue';

interface DropdownItem {
    name: string;
    submenu?: string[];
}

interface Dropdown {
    mainLabel: string;
    dropdownItems: DropdownItem[];
}

export default defineComponent({
    name: 'TheNavBar',
    components: {
        Dropdown,
    },
    data(): { dropdowns: Dropdown[] } {
        return {
            dropdowns: [
                {
                    mainLabel: 'Single Board Computers',
                    dropdownItems: [
                        { name: 'Ox64', submenu: ['Accessories'] },
                        { name: 'Star64', submenu: ['Accessories'] },
                        { name: 'PINE A64-LTS', submenu: ['Accessories', 'Addons'] },
                        { name: 'PINE H64', submenu: ['Accessories'] },
                        { name: 'ROCK64', submenu: ['Accessories'] },
                        { name: 'ROCKpro64', submenu: ['Accessories'] },
                        { name: 'Quartz64', submenu: ['Model-A Accessories', 'Model-B Accessories'] },
                        { name: 'All SBC accessories' },
                    ],
                },
                {
                    mainLabel: 'Compute Modules',
                    dropdownItems: [
                        { name: 'SOPINE', submenu: ['Accessories'] },
                        { name: 'SOEDGE', submenu: ['Accessories'] },
                        { name: 'SOQUARTZ', submenu: ['Accessories'] },
                    ],
                }
            ],
        }
    },
})
</script>

<style scoped>
.header {
    z-index: 999;
}

.navbar {
    background-color: #1988ea;
}

.menubutton {
    background-color: inherit;
}

.menubutton:hover {
    background-color: #2670b1;
}

.home {
    background-color: #2b80ca;
}

.shop {
    transition: all 0.5s;
    background-color: #fff;
    color: black;
}

.shop:hover {
    color: white;
    background-color: #2b80ca;
}

/* Style for the dropdown menu */
ul {
    list-style: none;
    padding: 0;
}

a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: inherit;
}

/* Optional: Style for the dropdown items */
li:hover {
    background-color: #f0f0f0;
}</style>