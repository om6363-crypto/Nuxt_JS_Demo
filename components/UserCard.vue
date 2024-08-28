<template>
    <div class="user-card">
        <h2>{{ name }}</h2>
        <p>ID: {{ id }}</p>
    </div>
</template>


<script>
export default({
    props:{
        name:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            required: true
        }
    }
})
</script>

<style scoped>


</style>