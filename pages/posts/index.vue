<template>
    <div>
        <h1>User Posts</h1>
        <PostCard v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<script >
import PostCard from '../../components/PostCard.vue'
export default {
    components: {
        PostCard
    },

    // The below function is used to fetch the data from the API

    async asyncData ({ $axios }) {
        const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
        return { posts }
    }
}

</script>