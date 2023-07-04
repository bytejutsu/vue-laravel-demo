<script>
export default {
    name: "Index",
    methods: {
        flash(message){
            alert(message);
        }
    }
}
</script>

<template>
    <h1 class="text-3xl">Home Playground</h1>
    <main>
        <Link href="/about">About</Link>
        <p>
            <button @click="flash('It Works!')">Click Me</button>
        </p>
    </main>
</template>


<style scoped>

</style>
