<template>
  <div :class="bgimage" >
        <h2 class="text-5xl text-white mt-10">{{ title }}</h2>
  </div>
</template>

<script>
export default {
    name: 'FixedBackground',
    props: [
        'bgimage',
        'title'
    ]
}
</script>

<style>
.laptop{
    background-attachment: fixed;
    min-height: 600px;
    background-image: url("/assets/PBP-placeholder.jpeg");
}
.phone{
    background-attachment: fixed;
    min-height: 600px;
    background-image: url("/assets/pinephone-placeholder.jpeg");
}
.tab{
    background-attachment: fixed;
    min-height: 600px;
    background-image: url("/assets/PineTabPlaceholder.jpeg");
}
</style>