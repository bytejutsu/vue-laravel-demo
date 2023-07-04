<script setup>
import {useFlash} from "../../Composables/useFlash.js";

let { flash } = useFlash();

</script>

<template>
    <div>
        <p>
            <button @click="flash('Yay it works','It Works on the about Page!', 'info')">click me</button>
        </p>
    </div>
</template>


<style scoped>

</style>
