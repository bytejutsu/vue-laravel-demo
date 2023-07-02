<template>
    <h1 class="text-3xl font-bold text-center m-4 p-2">Pinia Playground</h1>
    <todo-app />
</template>

<script setup>

import TodoApp from "./TodoApp.vue";
import {defineOptions} from "vue";

defineOptions({
    components: {TodoApp}
})

</script>

<style scoped>

</style>
