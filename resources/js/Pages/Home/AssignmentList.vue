<template>
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{assignments.length}})</span>
        </h2>
        <assignment-tags
            :initial-tags="assignments.map(a => a.tag)"
            :currentTag="currentTag"
            @change="currentTag = $event"
        />
        <ul class="border border-2 border-black divide-y divide-black mt-6">
            <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"/>
        </ul>
    </section>
</template>

<script>
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";

export default {
    name: "AssignmentList",
    data(){
        return {
            currentTag: 'all'
        }
    },
    components:{
        Assignment,
        AssignmentTags,
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
    }
}
</script>

<style scoped>

</style>
