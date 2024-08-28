<template>
    
</template>

<script>
export default {
    data(){
        return {
            form: {
                title: '',
                body: '',
                userId: null
            },
            errors: {},
            successMessage: ''
        }
    },
    methods: {
        validateTitle(){
            if(!this.form.title){
                this.errors.title = 'Title is required'
            }
            else{
                delete this.errors.title;
            }
        },
        validateBody(){
            if(!this.form.body){
                this.errors.body = 'Body is required'
            }
            else{
                delete this.errors.body;
            }
        },
        validateId(){    
            if(!this.form.id){
                this.errors.id = 'Id is required'
            }
            else if(isNAN(this.form.id)){
                this.errors.id = 'User ID must be a number is required'
            }
            else{
                delete this.errors.id;
            }
        }
    },
    async submitForm(){
        this.validateId(),
        this.validateBody(),
        this.validateId()
        if(Object.keys(this.errors).length === 0){
            try{
                const response = await this.$axios.$post('https://jsonplaceholder.typicode.com/posts', this.form)
                console.log(response)
            }
            catch(error){
                
            }
        }
    }
}
</script>