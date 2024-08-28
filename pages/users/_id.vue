<template>
    <div>
        <h1> User Profile</h1>
        <h3>UserId:{{ $route.params.id }}</h3>
        <nuxt-link to="/">Go back to Home</nuxt-link>
    </div>
    
    </template>
    <script>
    
    export default{
        name:'UserProfile'
    }
    </script>