<template>
    <div>
        {{$store.state.test}}
        <manage-post-list />
    </div>
</template>

<script>
    import ManagePostList from "../components/manage/posts/ManagePostList";
    export default {
        name: "ManagePosts.vue",
        components: {ManagePostList}
    }
</script>

<style scoped>

</style>