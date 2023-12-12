<template>
    <footer class="text-gray-600 body-font bg-black p-5">
        <h1 class="text-white text-3xl font-bold text-center mt-5">
            Information & Resources
        </h1>

        <div
            class="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <img src="/assets/Pinelogo.jpeg" alt="Logo" class="px-4">

            <div v-for="(category, index) in Categories" :key="index" class="lg:w-1/4 md:w-1/2 w-full px-4">
                <nav class="list-none mb-10">
                    <li v-for="(link, linkIndex) in category" :key="linkIndex" class="list-item-marker text-center">
                        <a :href="link.link" class="text-white ">{{ link.name }}</a>
                    </li>
                </nav>
            </div>
        </div>
    </footer>
</template>
<script lang="ts">
export default {
    name: 'Footer',
    props: {
        Categories: {
            type: Array as () => Array<Array<{ name: string, link: string }>>,
            default: () => [
                [
                    {
                        name: 'About Us',
                        link: '#',
                    },
                    {
                        name: 'Contact',
                        link: '#',
                    },
                    {
                        name: 'Affiliates',
                        link: '#',
                    },
                    {
                        name: 'Community Website',
                        link: '#',
                    },
                    {
                        name: 'Wiki',
                        link: '#',
                    }
                ],
                [
                    {
                        name: 'Warranty Policy',
                        link: '#',
                    },
                    {
                        name: 'Cancellation & Refunds',
                        link: '#',
                    },
                    {
                        name: 'Return & Refund Policies',
                        link: '#',
                    },
                    {
                        name: 'Terms & Conditions',
                        link: '#',
                    },
                    {
                        name: 'Privacy Policy',
                        link: '#',
                    },
                    {
                        name: 'Terms of Use',
                        link: '#',
                    },
                    {
                        name: 'Shipping Policy',
                        link: '#',
                    }
                ],
                [
                    {
                        name: 'Telegram News Channel',
                        link: '#',
                    },
                    {
                        name: 'Twitter',
                        link: '#',
                    },
                    {
                        name: 'Community Forum',
                        link: '#',
                    },
                    {
                        name: 'Discord',
                        link: '#',
                    },
                    {
                        name: 'IRC',
                        link: '#',
                    },
                    {
                        name: 'Matrix',
                        link: '#',
                    },
                    {
                        name: 'Telegram Groups',
                        link: '#',
                    }
                ],
            ]
        }
    }
}

</script>

<style scoped>
.list-item-marker {
    list-style: none;
    position: relative;
    text-align: center;
}

.list-item-marker::before {
    content: '•';
    color: grey;
    position: absolute;
    left: 0;
}
</style>