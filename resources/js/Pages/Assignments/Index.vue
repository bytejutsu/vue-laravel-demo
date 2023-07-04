<template>
    <h1 class="text-3xl font-bold text-center m-4 p-2">Assignments Playground</h1>
    <div class="grid gap-6">
        <assignments></assignments>

        <panel>
            This is my default content.
        </panel>

        <panel>
            <template v-slot:heading>
                Hi There
            </template>

            This is my default content.
        </panel>


        <panel>
            <template v-slot:heading>
                Hi There
            </template>

            This is my default content.

            <template v-slot:footer>
                Click here to learn more.
            </template>
        </panel>
    </div>
</template>

<script>
    import Assignments from "./Assignments.vue";
    import Panel from "./Panel.vue";

    export default {
        components: {
            Assignments,
            Panel
        }
    }
</script>

<style scoped>

</style>
