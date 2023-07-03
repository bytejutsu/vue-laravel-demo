<template>
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{assignments.length}})</span>
        </h2>
        <div class="flex gap-2 p-2">
            <button
                v-for="tag in tags"
                @click="currentTag = tag"
                class="bg-blue-500 rounded-full shadow-md p-2 text-white font-bold text-xs"
                :class="{'border border-2 border-green-300 text-green-300': tag === currentTag}"
            >
                {{tag}}
            </button>
        </div>
        <ul class="border border-2 border-black divide-y divide-black mt-6">
            <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"/>
        </ul>
    </section>
</template>

<script>
import Assignment from "./Assignment.vue";

export default {
    name: "AssignmentList",
    data(){
        return {
            currentTag: 'all'
        }
    },
    components:{
        Assignment
    },
    props: {
        title: String,
        assignments: Array,
    },
    computed: {
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
        tags(){
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}
</script>

<style scoped>

</style>
