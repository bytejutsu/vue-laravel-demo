<template>
    <Link href="/"
          class="text-black hover:underline"
          :class="{'font-bold underline': active}"
    >
        <slot />
    </Link>
</template>

<script>
export default {
    name: "NavLink",
    props: {
        active: Boolean
    }
}
</script>

<style scoped>

</style>
