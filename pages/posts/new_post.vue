<template>
    <div>
        <h1> Create a New Post</h1>
        <form @onSubmit="submitForm">
            <div>
                <label for="id">ID</label>
                <input type="number" id="id" v-model="form.id" @blur="validateId"/>
                <span v-if="errors.id">{{ errors.id }}</span>
            </div>
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="form.title" @blur="validateTitle"/>
                <span v-if="errors.title">{{ errors.title }}</span>
            </div>
            <div>
                <label for="body">Body</label>
                <input type="text" id="body" v-model="form.body" @blur="validateBody"/>
                <span v-if="errors.body">{{ errors.body }}</span>
            </div>
            <button type="submit">Submit</button>
        </form>

    <p v-if="successMessage">{{ successMessage }}</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                title: '',
                body: '',
                id: null
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
            else if(isNaN(this.form.id)){
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
                if(response.status === 201){
                    successMessage="Post created successfully"
                    console.log(response.data);
                    console.log("Form Data----", JSON.stringify(this.form))
                    this.form={
                        title:'',
                        body:'',
                        id: null
                    }
                }
            }
            catch(error){
                console.log("Error Submitting Form", error.message)
            }
        }
    }
}
</script>