<script>
import flash from '@/Mixins/flash.js';

export default {
    name: "AboutView",
    mixins: [flash]
}
</script>

<template>
    <div>
        <p>
            <button @click="flash('It Works on the about Page!')">click me</button>
        </p>
    </div>
</template>


<style scoped>

</style>
