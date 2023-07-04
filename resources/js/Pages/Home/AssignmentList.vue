<template>
    <Panel v-show="assignments.length" class="w-60" id="my-panel">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{assignments.length}})</span>
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>
        <assignment-tags
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
        />
        <ul class="border border-2 border-black divide-y divide-black mt-6">
            <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"/>
        </ul>

        <slot></slot>

        <template #footer>
            my footer goes here
        </template>
    </Panel>
</template>

<script>
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";
import AssignmentCreate from "./AssignmentCreate.vue";
import Panel from "./Panel.vue";

export default {
    name: "AssignmentList",
    data(){
        return {
            currentTag: 'all',
        }
    },
    components:{
        Assignment,
        AssignmentTags,
        AssignmentCreate,
        Panel
    },
    props: {
        title: String,
        assignments: Array,
        canToggle: { type:Boolean, default: false}
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
