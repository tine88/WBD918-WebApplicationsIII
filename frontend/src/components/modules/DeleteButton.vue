<template>
    <button type="button" class="alert button" @click="destroy">Delete</button>
</template>

<script>
    export default {
        name: "DeleteButton.vue",
        methods: {
            destroy() {
                axios.delete(`/${this.entity}/${this.id}`,)
                    .then(result => {
                        console.log(result)
                    })
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