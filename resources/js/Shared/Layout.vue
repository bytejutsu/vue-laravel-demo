<template>
    <section class="p-6 bg-gray-200">
        <header class="flex bg-gray-200 justify-between items-center">
            <div class="flex items-center">
                <h1 class="font-bold">My App</h1>
                <p class="text-sm ml-4">Welcome back, {{username}}!</p>
            </div>
            <Nav />
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot/>
        </div>
    </section>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    name: "Layout",
    components: { Nav },
    computed: {
        username(){
            return this.$page.props.auth.user.username;
        }
    },
};
</script>

<style scoped>

</style>
