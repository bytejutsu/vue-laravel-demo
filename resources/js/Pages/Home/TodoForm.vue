<template>
    <form @submit.prevent="addItemAndClear(todo)">
        <div class="flex justify-between">
            <input v-model="todo" type="text" class="w-full m-4 p-2 outline outline-2 outline-blue-400 focus:outline-blue-500"/>
            <button type="submit" class="m-4 p-2 bg-blue-500 text-white font-bold">Add</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import {useTodoListStore} from "../../Stores/useTodoListStore.js";

    const todo = ref("");
    const store = useTodoListStore();

    function addItemAndClear(item) {
        if (item.length === 0) {
            return;
        }
        store.addTodo(item);
        todo.value = "";
    }

</script>

<style scoped>

</style>
