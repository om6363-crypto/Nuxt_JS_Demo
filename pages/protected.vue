<template>
    <div>
        <h1>Protected Page</h1>
        <p>You are logged in and can view this page.</p>
        <button @click="logout">Logout</button>
    </div>
</template>



<script>
export default{
    middleware: 'auth',
    methods: {
        logout(){
            this.$store.commit('auth/logout')
            this.$router.push('/login')
        }
    }
}

</script>