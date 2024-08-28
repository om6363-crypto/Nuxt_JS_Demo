<!-- <template>
    <div>
        <h1>List of Products</h1>
        <div v-if="products.length">
            <div v-for="product in products" :key="product.id">
                <h2>{{ product.title }}</h2>
                <img :src="product.image" :alt="product.title" width="150"/>
                <p>{{ product.description }}</p>
                <h3>Price: {{ product.price }}</h3>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
export default {
    async fetch ({ store }) {
        await store.dispatch('products/fetchProducts')
    },
    computed: {
        products () {
            return this.$store.state.products.products
        }
    }
}
</script> -->