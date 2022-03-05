<template>
<div class="product-fullpage">
    <div class="product-card" v-if="!loading">
        <img :src="productById.imageURL">
        <div class="product-headings">
            <div class="product-info" v-animate-on-scroll>
                <h1>{{ productById.name }}</h1>
                <h2>£{{ productById.price }}</h2>
            </div>
            <div class="product-cart" v-animate-on-scroll>
                <div class="quantity-info">
                    <label for="quantity">Quantity:</label>
                    <input v-model.number="productInfo.quantity" name="quantity" type="number" min="0" max="99"/>
                </div>
                <button @click="addToCart" :disabled="noQuantity">Add To Cart ></button>
            </div>
        </div>
    </div>
    <div class="overlay" v-else>
        Loading...
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    created(){
        this.loading = true,
        this.$store.dispatch('getProductById', this.$route.params.id)
        .finally(() => (this.loading=false))
    },
    data() {
        return {
            loading: false,
            productInfo: {
                quantity: 0,
            },
        }
    },
    computed: {
        noQuantity() {
            return this.productInfo.quantity < 1
        },
        ...mapState(['productById'])

    },
    methods: {
        addToCart() {
            if(!this.noQuantity) {
                let payload = {
                    ...this.productById,
                    quantity: this.productInfo.quantity
                }
                this.$store.dispatch('addToCart', payload)
                this.productInfo.quantity = 0
            }
        },
    }
}
</script>

<style scoped>
    .product-fullpage {
        background-color: whitesmoke;
        height: 100vh;
    }
    .product-card {
        display: flex;
        flex-direction: column;
        margin: 0 5vw;
    }
    img {
        justify-content: center;
        height: 70vh;
        width: 90vw;
        margin: 8vh 0px 2vh 0px;
        object-fit: cover;
    }
    .product-headings {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .product-info {
        height: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .product-cart {
        height: auto;
        width: 50%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-direction: column;
    }
    .before-enter.enter {
        opacity: 1;
        transform: translateY(0);
    }
    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            /* transition: all 1.3s ease; */
    }
</style>