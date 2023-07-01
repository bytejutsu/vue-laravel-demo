<template>
    <nav class="">
        <ul class="flex space-x-6 list-inside">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/pinia" :active="$page.component === 'Pinia'">Pinia</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">Settings</NavLink>
            </li>
            <li>
                <NavLink href="/logout" method="post" as="button">Logout</NavLink>
            </li>
        </ul>
    </nav>
</template>

<script>

import NavLink from "./NavLink.vue";

export default {
    name: "Nav",
    components: { NavLink },
}
</script>

<style scoped>

</style>
