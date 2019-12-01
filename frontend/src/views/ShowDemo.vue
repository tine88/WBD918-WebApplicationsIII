<template>
    <div>
        <h2>Components Demo</h2>
        <entry />
        <login />
    </div>
</template>

<script>
    import Entry from "../components/archiv/Entry";
    import Login from "../components/login/Login";

    export default {
        components: {
            Entry,
            Login
        }
    }
</script>

<style scoped>

</style>