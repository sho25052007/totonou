<template>
<div class="product-fullpage">
    <div class="product-card">
        <img :src="productInfo.imageURL">
        <div class="product-headings">
            <div class="product-info" v-animate-on-scroll>
                <h1>{{ productInfo.name }}</h1>
                <h2>£{{ productInfo.price }}</h2>
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
</div>
</template>

<script>
export default {
    data() {
        return {
            productInfo: {
                quantity: 0,
                imageURL: this.$store.state.products[`${this.$route.params.id - 1}`].imageURL,
                name: this.$store.state.products[`${this.$route.params.id - 1}`].name,
                price: this.$store.state.products[`${this.$route.params.id - 1}`].price
            }
        }
    },
    computed: {
        noQuantity() {
            return this.productInfo.quantity < 1
        }
    },
    methods: {
        addToCart() {
            if(!this.noQuantity) {
                this.$store.dispatch('addToCart', this.productInfo)
                this.productInfo.quantity = 0
                console.log(this.$store.state.items)
            }
        }
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