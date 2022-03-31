<template>
<div class="product-fullpage">
    <div class="product-card" v-if="!loading">
        <div class="product-img">
            <img :src="productById.imageURL">
        </div>
        <div class="product-headings">
            <div class="product-info" v-animate-on-scroll>
                <div class="product-title">
                    <h2>{{ productById.name }}</h2>
                    <h3>£{{ productById.price }}</h3>
                </div>
                <span></span>
                <div class="description">
                    <p>{{productById.description}}</p>
                    <h4 class="detail-label">Product Detail</h4>
                    <ul class="detail-list">
                        <li>Each tablet provides high amount of key vitamins</li>
                        <li>Great way to increase daily vitamin intake</li>
                        <li>Easy-to-take tablet at a low price</li>
                    </ul>
                </div>
            </div>
            <div class="product-cart">
                <div class="quantity-price-info">
                    <div class="quantity-bar">
                        <label for="quantity"><h3>Quantity:</h3></label>
                        <input v-model.number="productInfo.quantity" name="quantity" type="number" min="0" max="99"/>
                    </div>
                    <h3 class="total-cost">Total Cost: £{{displayPrice}}</h3>
                </div>
                <button @click="addToCart" :disabled="noQuantity" id="add-btn">
                    <div class="price-display">
                        <h4>Add To Cart</h4>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <div class="overlay" v-else>
        <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse size="3x" id="loading-icon"/>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    created(){
        this.loading = true,
        this.$store.dispatch('getProductById', this.$route.params.id)
        // .finally(() => (this.loading=false))
        //the watch instance below stops the image from flashing with old image and shows loading animation until new image appears
        this.$watch('productById', (newVal) => {
            if(newVal) {
                // this.imgSrc = newVal
                this.loading = false
            }
        })
    },
    data() {
        return {
            // imgSrc: this.productById.imageURL,
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
        displayPrice() {
            let calcPrice = this.productInfo.quantity * this.productById.price
            return (Math.round(calcPrice * 100) / 100).toFixed(2)
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
    },
    // watch: {
    //     imgSrc: (newVal, oldVal) => {
    //         if(newVal) {
    //             this.imgSrc = newVal
    //             this.loading = false
    //         }
    //     }
    // }
}
</script>

<style scoped>
    .product-fullpage {
        background-color: whitesmoke;
        height: 100vh;
    }
    .product-card {
        display: flex;
        flex-direction: row;
        margin: 0 5vw;
    }
    .product-img {
        width: 100%;
        height: 80vh;
        margin-top: 10vh;
        margin-right: auto;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .product-headings {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: center; */
        width: 70vw;
        margin: 1vh 0 1vh 2vw;
    }
    span {
        display:block;
        width: 100%;
        border-top: 1px solid #ccc;
        margin: 2vh 0;
    }
    .product-text {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-self: space-between;
        margin-bottom: 2vh;
    }
    .product-info, .product-cart {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 10vh;
    }
    .quantity-price-info, .product-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2vh;
        width: 100%;
        align-items: flex-end;
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
    #add-btn {
        display: block;
        width: 100%;
        border: none;
        border-radius: 20px;
        padding: 10px 0px;
        background-color: #4d6fe9;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        color: white;
        font-weight: 300;
    }
    .price-display, .quantity-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
    }
    .price-display h4 {
        margin: 0 2vw;
    }
    input[type=number] {
        margin-left: 1vw;
        border-radius: 10px;
        border: 1px solid #4d6fe9;
        padding: 2px;
        text-align: center;
    }
    .detail-label {
        margin: 5vh 0 2.5vh 0;
    }
    .detail-list li {
        list-style-type: none;
        margin: 2vh 0;
    }


    /* mobile media query landscape 800px = 50rem * 16px default font size */
    @media screen and (min-width: 30rem) and (max-width: 60rem) and (max-height: 40rem) {
        /* .product-card {
            flex-direction: column;
        } */
        .product-img {
            /* height: 30vh; */
            margin-top: 12vh;
        }
        .product-headings {
            width: 90vw;
            margin: 10vh 0 5vh 5vw;
            height: 80vh;
        }
        .product-info, .product-cart {
            margin-top: 1vh;
        }
        span {
            margin: 0.5vh 0;
        }
        .detail-label {
            text-align: center;
            margin: 8vh 0 1vh 0;
        }
        .detail-list li {
            text-align: center;
            margin: 1vh 0;
        }
    }

    /* desktop narrow media query 800px = 50rem * 16px default font size */
    @media screen and (max-width: 60rem) and (min-height: 40rem) {
        .quantity-price-info, .quantity-bar {
            align-items: center;
        }
        .total-cost {
            font-size: 0.8rem;
            margin-right: 2vw;
        }

        .quantity-bar h3 {
            font-size: 0.8rem;
            margin-left: 2vw;
        }

        input[type=number] {
            margin-left: 0.5vw;
            padding: 0px;
            font-size: 0.8rem;
        }
    }

    /* desktop super narrow media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 40rem) and (min-height: 40rem) {
        .quantity-price-info {
           flex-direction: column;
        }
        .total-cost {
            font-size: 0.8rem;
            margin-right: 0vw;
            margin-top: 1vh;
        }

        .quantity-bar h3 {
            font-size: 0.8rem;
            margin-left: 0vw;
        }

        input[type=number] {
            margin-left: 1vw;
            padding: 0px;
            font-size: 0.8rem;
        }
    }

    /* desktop & mobile media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) and (min-height: 40rem) {
        .product-card {
            flex-direction: column;
        }
        .product-img {
            height: 30vh;
            margin-top: 8vh;
        }
        .product-headings {
            width: 90vw;
            margin: 1vh 0;
            height: 55vh;
        }
        .product-info, .product-cart {
            margin-top: 2vh;
        }
        span {
            margin: 1vh 0;
        }
        .detail-label {
            margin: 3vh 0 2vh 0;
        }
        .detail-list li {
            margin: 2vh 0;
        }
    }
</style>