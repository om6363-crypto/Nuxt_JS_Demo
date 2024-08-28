<template>
    <div>
        <h1>{{ post.title }}</h1>
        <h2>{{ post.body }}</h2>
        <nuxt-link :to="`/posts`">Back to posts</nuxt-link>
    </div>
</template>

<script>
export default {
    async fetch() {
        const post = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        this.post = post
    },

    data() {
        return {
            post: {}
        }
    }
}


</script>