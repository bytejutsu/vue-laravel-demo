<template>
    <div id="app">
        <h1 class="text-3xl font-bold text-center m-4 p-2">Home Playground</h1>
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress" />

            <assignment-list :assignments="filters.completed" title="Completed" />

            <assignment-create @add="add"></assignment-create>
        </section>
    </div>
</template>

<script>
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";

export default {
    name: "Assignments",
    data(){
        return {
            assignments: [
                { name: "Finish Project", complete: false, id: 1, tag: 'math' },
                { name: "Read Chapter 4", complete: false, id: 2, tag: 'science' },
                { name: "Turn in homework", complete: false, id: 3, tag: 'math' },
            ],
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        },
    },
    components: {
        AssignmentList,
        AssignmentCreate,
    },
    methods: {
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
            });
        }
    },
}
</script>

<style scoped>

</style>
