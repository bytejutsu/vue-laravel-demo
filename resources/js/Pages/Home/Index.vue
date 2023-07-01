<template>
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
