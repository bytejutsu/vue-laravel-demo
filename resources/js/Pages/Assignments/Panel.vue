<template>
    <div :class="{
        'bg-gray-300 p-4 border border-gray-200 rounded-lg': true,

        }"

    >
        <h2 v-if="$slots.heading" class="font-bold">
            <slot name="heading"/>
        </h2>

        <slot name="default"/>

        <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Panel",
    props:{
        theme: { type: String, default: 'dark'}
    }
}
</script>

<style scoped>

</style>
