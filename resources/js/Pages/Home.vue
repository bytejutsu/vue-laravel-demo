<template>
    <Layout>
        <h1 class="text-4xl font-bold">Home</h1>
    </Layout>
</template>

<script>
import Layout from "../Shared/Layout.vue";

export default {
    name: "Home.vue",
    components: { Layout },
    props: {username: String}
};

</script>

<style scoped>

</style>
