<template>
    <Head title="Login Page"/>
    <main class="grid place-items-center min-h-screen">
        <section class="bg-white p-8 rounded-xl max-w-md mx-auto border">
            <h1 class="text-3xl mb-6">Login</h1>
            <form @submit.prevent="submit" method="POST" action="/" class="">
                <div class="mb-6">
                    <label
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        for="email"
                    >
                        Email
                    </label>

                    <input v-model="form.email" class="border p-2 w-full rounded"
                           type="email"
                           name="email"
                           id="email"
                           required
                    >
                    <div v-if="form.errors.email" v-text="$page.props.errors.email" class="text-red-500 text-xs font-italic mt-1"></div>
                </div>

                <div class="mt-6">
                    <label
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        for="password"
                    >
                        Password
                    </label>

                    <input v-model="form.password" class="border p-2 w-full rounded"
                           type="password"
                           name="password"
                           id="password"
                           required
                    >
                    <div v-if="form.errors.password" v-text="$page.props.errors.password" class="text-red-500 text-xs font-italic mt-1"></div>
                </div>

                <div class="mt-6">
                    <button type="submit"
                            class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                            :disabled="form.processing"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>

<script setup>
//import Layout from "../../Shared/Layout.vue";

import {useForm} from "@inertiajs/vue3";

defineOptions({ layout: null})

let form = useForm({
    email: '',
    password: '',
});

let submit = () => {
    form.post("/login");
};

</script>

<style scoped>

</style>
