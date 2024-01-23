<template>
    <div class="flex justify-center bg-gray-200 h-20">
        <nav class="bg-white h-14 w-3/5 px-5 ">
            <div class="h-full navbarbg flex">
                <ul class="h-full justify-between flex flex-row">
                    <div v-for="dropdown in dropdowns" :key="dropdown.mainLabel" class="h-full">
                        <li class="h-full flex items-center menubutton">
                            <Dropdown :mainLabel="dropdown.mainLabel" :dropdownItems="dropdown.dropdownItems" />
                        </li>
                    </div>

                    <!-- Shopping cart element -->

                </ul>
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
.navbarbg {
    background-color: #1988ea;
}

.menubutton {
    background-color: inherit;
}

.menubutton:hover {
    background-color: #2670b1;
}

/* Style for the dropdown menu */
ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
}

a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: inherit;
}

/* Optional: Style for the dropdown items */
li:hover {
    background-color: #f0f0f0;
}
</style>