<template>
    <div>
    <h1>Users List</h1>
    
    <UserCard v-for="user in users" :key="user.id" :name="user.name" :id="user.id"/>
    <nuxt-child></nuxt-child>
    </div>
    </template>
    <script>
    // import UserCard from '../../components/UserCard.vue';
    import UserCard from '../../components/UserCard.vue';
    
    export default{
    
        name:'UsersLit',
        components:{
            UserCard
        },
        data(){
            return{
                users:[
                    {id:1,name:'Alice'},
                    {id:2,name:'Bob'},
                    {id:3,name:'Charlie'},
                    {id:4,name:'David'},
                    {id:5,name:'Eve'}
                ]
            }
        }
    }
    </script>

<style scoped>



</style>