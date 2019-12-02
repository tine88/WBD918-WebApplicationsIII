<template>
    <button type="button" class="alert button" @click="deletePost">Delete</button>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "DeleteButton.vue",
        methods: {
            ...mapActions(['fetchPosts', 'destroyPost']),
            deletePost() {
                this.destroyPost(this.entity + "/" + this.id).then(data => {
                    this.fetchPosts();
                });
            }
        },
        props: {
            id: {
                required: true,
                type: Number
            },
            /**
             * Entity representy an database object which is clearly identifiable by id
             */
            entity: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped>

</style>