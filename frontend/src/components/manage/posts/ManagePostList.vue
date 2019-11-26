<template>
    <div class="ManagePostList">
        <h2>Post List</h2>
        <ul class="list" v-if="posts">
            <!-- if your confused by {id, name.. } syntax - check js destructuring -->
            <manage-post-entry v-for="({id, headline, author_id}, index) in posts"
                               :key="index"
                               :id="id"
                               :headline="headline"
                               :author_id="author_id"
            />

        </ul>
    </div>
</template>

<script>
    import ManagePostEntry from "./ManagePostEntry";

    export default {
        name: "PostList",
        data() {
            return {
                posts: null
            }
        },
        components: {ManagePostEntry},
        mounted() {
            this.fetchPosts();
        },
        methods: {
            fetchPosts() {
                axios.get('/posts').then(posts => {
                    console.log(posts);
                    this.posts = posts.data;
                })
            }
        }
    }

</script>

<style scoped>

</style>