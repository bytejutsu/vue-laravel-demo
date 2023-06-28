<template>
    <Layout>
        <h1 class="text-4xl font-bold">Users</h1>
        <div style="margin-top: 800px">
            <p>The current Time is: {{time}}.</p>
        </div>

        <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
    </Layout>
</template>

<script>
import Layout from "../Shared/Layout.vue";

export default {
    name: "Users",
    components: { Layout },
    props: { time: String },
};
</script>

<style scoped>

</style>
