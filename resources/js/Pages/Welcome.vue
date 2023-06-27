<template>
    <h1>Hello, {{name}}</h1>
</template>

<script>
export default {
    name: "Welcome.vue",
    props: {
        name: String
    }
}
</script>

<style scoped>

</style>
