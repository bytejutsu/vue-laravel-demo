<template>
    <button :class="{
            'border rounded px-4 py-2 disabled:cursor-not-allowed': true,
            'bg-gray-200 hover:bg-gray-400': type === 'muted',
            'bg-blue-200 hover:bg-blue-400': type === 'primary',
            'bg-green-200 hover:bg-green-400': type === 'secondary',
        }"
        :disabled="processing">
        <slot/>
    </button>
</template>

<script>
export default {
    name: "AppButton",
    data(){
        return {
        }
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>
</style>
