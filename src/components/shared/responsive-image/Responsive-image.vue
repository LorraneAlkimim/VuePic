<template>
    <!-- Alternativa para usar interpolação em atributos de tags html -->
    <!-- <img v-bind:src="photo.url" v-bind:alt="photo.alt"> -->
    <img class="responsive-image" :src="url" :alt="title">
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .responsive-image {
        width: 100%;
    }
</style>