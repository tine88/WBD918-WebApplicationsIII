<template>
    <header class="top-bar AppHeader">
        <div class="top-bar-left">
            <ul class="menu">
                <router-link class="menu-text" :to="{name: 'home'}">Home</router-link>
                <router-link class="menu-text" :to="{name: 'manage-posts'}">Manage Posts</router-link>
                <router-link class="menu-text" :to="{name: 'show-demo'}">Show Demo</router-link>

            </ul>
        </div>
        <searchbar />
    </header>
</template>

<script>
    import Searchbar from './../modules/Searchbar';

    export default {
        name: "AppHeader.vue",
        components: {
            Searchbar
        }
    }
</script>

<style scoped>

</style>