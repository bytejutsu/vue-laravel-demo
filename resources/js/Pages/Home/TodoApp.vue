<template>
    <div class="flex flex-col border-solid border-2 border-blue-500 p-2">
        <todo-form />
        <todo-list />
    </div>
</template>

<script setup>

import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

import {defineOptions} from "vue";

defineOptions({
    components: { TodoForm, TodoList },
});

</script>

<style scoped>

</style>
