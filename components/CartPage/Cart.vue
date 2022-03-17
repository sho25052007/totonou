<template>
  <div class="cart-fullpage">
      <div class="cart-heading">
            <h1>Cart</h1>
            <!-- <div class="cart-heading-info">
                <h1>Cart</h1>
                <h3 class="cart-total">Cart Total: £{{ totalCost }}</h3>
            </div> -->
            <!-- <a @click="$router.go(-1)" style="cursor: pointer">Go Back</a> -->
            <h3 style="cursor: pointer" @click="handleCartClose">CLOSE</h3>
      </div>
      <div class="cart-info">
        <div class="cart-item-info">
                <cart-item class="cart-item" v-for="item in cartItems" :key="item.id" :item="item" />
                <stripe-checkout
                    ref="checkoutRef"
                    mode="payment"
                    :billingAddressCollection="billingAddressCollection"
                    :shippingAddressCollection="shippingAddressCollection"
                    :pk="pk"
                    :line-items="lineItems"
                    :successUrl="successUrl"
                    :cancelUrl="cancelUrl"
                />
                <div class="checkout-btn">
                    <button
                        @click="checkout"
                        :class="{ dis: loading }"
                    >
                        {{ loading ? "Loading..." : `Pay ${totalCost}` }}
                    </button>
                </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    components: {
        'cart-item': require('@/components/CartPage/CartItem.vue').default
    },
    data () {
        this.pk = process.env.STRIPE_PK
        return {
            loading: false,
            // customerEmail: '', <!-- :customerEmail="customerEmail" -->
            lineItems: [],
            billingAddressCollection: 'required',
            shippingAddressCollection: {
                allowedCountries: ['GB'],
            },
            successUrl: 'http://localhost:3000',
            cancelUrl: 'http://localhost:3000',
        };
    },
    computed: {
        // getLineItems: {
        //     get() {
        //         return this.$store.getters.lineItems
        //     }
        // },
        cartItems: {
            get() {
                return this.$store.getters.cartItems
            }
        },
        totalCost: {
            get() {
                return this.$store.getters.totalCost
            }
        }
    },
    // watch: {
    //     getLineItems(newLineItems, oldLineItems) {
    //         this.lineItems = newLineItems
    //     }
    // },
    methods: {
        checkout () {
            this.loading = true
            this.lineItems = this.$store.getters.lineItems

            // if(!this.$store.state.user.isAnonymous) {
            //     this.customerEmail = this.$store.state.user.email
            // } else {
            //     //make anonymous user sign in!
            // }

            // console.log(this.lineItems)
            this.$refs.checkoutRef.redirectToCheckout();
        },

        handleCartClose() {
            this.$parent.$emit('closeCart')
        }
    }
}
</script>

<style scoped>
    .cart-fullpage {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 50px;
    }
    .cart-heading {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 2vh;
    }
    .cart-info {
        display: flex;
        flex-direction: row;
        max-height: inherit;
        height: 84%;
    }
    .cart-item-info {
        width: 100%;
        margin-right: 1vw;
        /* height: 100%; */
        overflow-y: auto;
        overflow-x: hidden;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .cart-item-info::-webkit-scrollbar {
        display: none;
    }
    .cart-item {
        margin-right: 1vw;
        margin-bottom: 2vh;
        border: none;
    }
    .card-info {
        overflow-y: hidden;
        /* border: 1px solid black; */
        color: white;

        border: none;
        border-radius: 4px;
        /* padding: 10px 0px; */
        background-color: #31394d;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.6);
        box-sizing: border-box;

        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        padding-bottom: 15px;
        margin-left: 2vw;
    }
    .checkout-btn button{
        display: block;
        width: 100%;
        border: none;
        border-radius: 4px;
        padding: 10px 0px;
        background-color: #4d6fe9;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        text-align: center;
        cursor: pointer;
        color: white;
        font-weight: 300;
    }
</style>