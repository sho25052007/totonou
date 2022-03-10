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
                <cart-item class="cart-item" v-for="item in this.$store.getters.cartItems" :key="item.id" :item="item" />
        </div>
        <div class="checkout-info">
            <form @submit.prevent="handleSubmit" class="checkout-form">
                <fieldset :class="{ dis: loading }" class="input-info">
                    <div class="shipping-info">
                        <h3>Shipping</h3>
                        <div class="shipping-address">
                            <label for="name">Name:</label>
                            <input type="text" name="name">
                            <label for="phone">Phone:</label>
                            <input type="number" name="phone">
                            <label for="email">Email Address:</label>
                            <input type="email" name="email">
                            <label for="address">Shipping Address:</label>
                            <input type="text" name="address">
                            <label for="city">City:</label>
                            <input type="text" name="city">
                            <label for="country">Country:</label>
                            <input type="text" name="country">
                            <label for="post">Postcode:</label>
                            <input type="text" name="post">
                        </div>
                    </div>
                    <div class="card-info">
                        <div class="card-details">
                            <h3>Credit Card</h3>
                            <label for="card-name">Name on card:</label>
                            <input type="text" name="card-name">
                            <label for="card-number">Card Number:</label>
                            <input type="number" name="card-number">
                            <label for="expiration">Expires:</label>
                            <input type="select" name="expiration" id="month">
                            <input type="select" name="expiration" id="year">
                            <label for="ccv">CCV:</label>
                            <input type="number" name="ccv">
                        </div>
                        <div class="checkout-btn">
                            <button
                                type="submit"
                                :class="{ dis: loading }"
                            >
                                {{ loading ? "Loading..." : `Pay ${totalCost}` }}
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    components: {
        'cart-item': require('@/components/CartPage/CartItem.vue').default
    },
    computed: {
        totalCost: {
            get() {
                return this.$store.getters.totalCost
            }
        }
    },
    methods: {
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
        width: 50%;
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
        border-bottom: 1px solid slategray;
    }
    .cart-item:last-child {
        border-bottom: 0px;
    }
    .checkout-info {
        width: 50%;
    }
    .input-info {
        display: flex;
        flex-direction: row;
        border: 0px;
        height: 100%;
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
    .shipping-info {
        overflow-y: hidden;
        /* border: 1px solid black; */
        color: white;

        border: none;
        border-radius: 4px;
        /* padding: 10px 0px; */
        background-color: #31394d;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.6);

        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        padding-bottom: 15px;
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
    .card-details h3, .shipping-info h3 {
        margin-bottom: 3vh;
        font-weight: 300;
    }
    label {
        width: 100%;
        font-size: 0.8rem;
        color: #acacac;
    }
    input {
        width: 100%;
        border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 1px solid white;
    }
    input:focus {
        border-color:#4d6fe9;
    }
</style>