<template>
    <form @submit.prevent="add">
        <div class="flex justify-between items-center">
            <input v-model="form.newAssignment" type="text" name="assignment" id="assignment" placeholder="New Assignment..." class="w-full p-2 outline outline-black">
            <button type="submit" class="bg-black p-2 text-white font-bold">Add</button>
        </div>
    </form>
</template>

<script>
import {useForm} from "@inertiajs/vue3";

export default {
    name: "AssignmentCreate",
    data(){
        return {
            form: useForm({
                newAssignment: '',
            })
        }
    },
    methods:{
        add(){
            this.$emit('add', this.form.newAssignment);
            this.form.newAssignment = '';
        }
    }
}
</script>

<style scoped>

</style>
