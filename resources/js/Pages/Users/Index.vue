<template>
    <Head>
        <title>Users</title>
    </Head>

    <div class="flex justify-between mb-6">

        <div class="flex items-center">
            <h1 class="text-3xl">Users</h1>
            <Link v-if="can.createUser" href="/users/create" class="text-blue-500 text-sm ml-3">New User</Link>
        </div>


        <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg"/>
    </div>

    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left">
                        <thead
                            class="border-b bg-white font-medium">
                        <tr>
                            <th scope="col" class="px-6 py-4">#</th>
                            <th scope="col" class="px-6 py-4">Name</th>
                            <th scope="col" class="px-6 py-4">Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users.data"
                            :key="user.id"
                            class="border-b bg-neutral-100"
                        >
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{{user.id}}</td>
                            <td class="whitespace-nowrap px-6 py-4">{{user.name}}</td>
                            <td v-if="user.can.edit" class="whitespace-nowrap px-6 py-4">
                                <Link :href="`/users/${user.id}/edit`" class="text-blue-500">Edit</Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Paginator -->
    <Pagination :links="users.links" class="mt-6"/>

</template>

<script setup>

import Pagination from "../../Shared/Pagination.vue";
import {ref, watch} from "vue";
import { router } from '@inertiajs/vue3';
import throttle from "lodash/throttle";


let props = defineProps({
    users: Object,
    filters: Object,
    can: Object,
});


let search = ref(props.filters.search);

watch(search, throttle(value => {
    console.log(`changed ${value}`);
    router.visit('/users', {
        method: 'get',
        data: {
            search: value,
        },
        preserveState: true,
        replace: true,
    });
}, 500));

</script>

<style scoped>

</style>
