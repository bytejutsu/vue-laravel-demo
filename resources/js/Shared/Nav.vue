<template>
    <nav class="">
        <ul class="flex list-disc space-x-4 list-inside">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users/?foo=bar&baz=buzz">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings">Settings</NavLink>
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
