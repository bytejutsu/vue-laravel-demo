<template>
    <form @submit.prevent="addItemAndClear(form.todo)">
        <div class="flex justify-between">
            <input v-model="form.todo" type="text" class="w-full m-4 p-2 outline outline-2 outline-blue-400 focus:outline-blue-500"/>
            <button type="submit" class="m-4 p-2 bg-blue-500 text-white font-bold">Add</button>
        </div>
    </form>
</template>

<script setup>

import {useTodosStore} from "../../Stores/useTodosStore.js";

import { useForm } from '@inertiajs/vue3'

const form = useForm({
    todo: "",
})

const todosStore = useTodosStore();

function addItemAndClear(item) {
    if (item.length === 0) {
        return;
    }
    todosStore.addTodo(item);
    form.todo = "";
}

</script>

<style scoped>

</style>
