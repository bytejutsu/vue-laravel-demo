<template>
    <div class="flex gap-2 p-2">
        <button
            v-for="tag in tags"
            @click="$emit('update:currentTag', tag)"
            class="bg-blue-500 rounded-full shadow-md p-2 text-white font-bold text-xs"
            :class="{'border border-2 border-green-300 text-green-300': tag === currentTag}"
        >
            {{tag}}
        </button>
    </div>
</template>

<script>
export default {
    name: "AssignmentTags",
    data(){
        return {
        }
    },
    props:{
        initialTags: Array,
        currentTag: String,
    },
    computed:{
        tags(){
            return ['all', ...new Set(this.initialTags)];
        }
    },
    methods:{}
}
</script>

<style scoped>

</style>
