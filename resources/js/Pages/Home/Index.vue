<script setup>
import { useFlash } from "@/Composables/useFlash.js";
import {ref, watch} from "vue";
import {useStorage} from "../../Composables/useStorage.js";

let { flash } = useFlash();

let food = useStorage('food','salad');
let age = useStorage('age')

</script>

<template>
    <h1 class="text-3xl">Home Playground</h1>
    <main>
        <Link href="/about">About</Link>
        <p>
            <button @click="flash('Test', 'It Works!')">Click Me</button>
        </p>
        <p>
            What is your favorite food? <input type="text" v-model="food">
        </p>
        <p>
            What is your age? <input type="text" v-model="age">
        </p>
    </main>
</template>


<style scoped>

</style>
