<script setup>
import { useFlash } from "@/Composables/useFlash.js";

let { flash } = useFlash();

</script>

<template>
    <h1 class="text-3xl">Home Playground</h1>
    <main>
        <Link href="/about">About</Link>
        <p>
            <button @click="flash('Test', 'It Works!')">Click Me</button>
        </p>
    </main>
</template>


<style scoped>

</style>
