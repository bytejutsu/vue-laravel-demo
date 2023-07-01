<template>
    <ul class="space-y-0 divide-y">
        <li class="divider"></li>
        <li v-for="todo in todoList" :key="todo.id" class="m-2 p-2">
            <div class="flex justify-between items-center">
                <p :class="{ 'line-through': todo.completed }" class="m-2 p-2 font-bold">{{ todo.item }}</p>
                <div class="flex justify-start">
                    <button @click.stop="toggleCompleted(todo.id)" class="m-2 p-2">&#10004;</button>
                    <button @click="deleteTodo(todo.id)" class="m-2 p-2">&#10060;</button>
                </div>
            </div>
        </li>
        <li class="divider"></li>
    </ul>
</template>

<script setup>

import { storeToRefs } from "pinia";
import {useTodoListStore} from "../../Stores/useTodoListStore.js";

const store = useTodoListStore();

const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

</script>

<style scoped>

</style>
