<template>
    <div>
        <h1>Filtered Posts</h1>
        <p v-if="query.UserId">User ID: {{ query.UserId }}</p>
        <p v-else>Please Provide a valid UserID as a query parameter to filter the users</p>

    </div>
</template>


<script>
export default{
    data(){
        return{
            posts:[]
        }
    },
    computed: {
        query() {
            return this.$route.query
        },
        filteredPosts() {
            if(this.query.UserId){
                return this.posts.filter(post => post.UserId == parseInt(this.query.UserId))
            }
            return this.posts;
        }
    },
    async fetch() {
        const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
        this.posts = posts
    }
}



</script>