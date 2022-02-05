<template>
  <div class="cart-fullpage">
      <div class="cart-heading">
          <h1>Cart</h1>
          <!-- <a @click="$router.go(-1)" style="cursor: pointer">Go Back</a> -->
          <h3 style="cursor: pointer" @click="$emit('closeCart')">CLOSE</h3>
      </div>
      <div class="cart-info">
        <div class="cart-item-info">
                <cart-item class="cart-item" v-for="item in cartItems" :key="item.id" :item="item" />
                <h3 class="cart-total">Cart Total: £{{ totalCost }}</h3>
        </div>
        <div class="input-info">
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
                <h3>Credit Card</h3>
                <div class="card-details">
                    <label for="card-name">Name on card:</label>
                    <input type="text" name="card-name">
                    <label for="card-number">Card Number:</label>
                    <input type="number" name="card-number">
                    <label for="expiration">Expires:</label>
                    <input type="select" name="expiration" id="month">
                    <input type="select" name="expiration" id="year">
                    <label for="ccv">CCV:</label>
                    <input type="number" name="ccv">
                    <div class="checkout-btn">Check Out</div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: this.$store.state.items
        }
    },
    components: {
        'cart-item': require('@/components/CartPage/CartItem.vue').default
    },
    computed: {
        totalCost: {
            get() {
                return this.$store.getters.totalCost
            }
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
        background-color: antiquewhite;
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
        height: 85%;
    }
    .cart-item-info {
        width: 50%;
        margin-right: 2vw;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .cart-item {
        margin-right: 1vw;
        margin-bottom: 2vh;
    }
    .input-info {
        display: flex;
        flex-direction: row;
        width: 50%;
    }
    .card-info {
        overflow-y: hidden;
        border: 1px solid black;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin-left: 2vw;
    }
    .shipping-info {
        overflow-y: hidden;
        border: 1px solid black;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 0px 2vw;
    }
    label, input {
        width: 90%;
    }
    .cart-total {
        float: right;
        margin-top: 2vh;
        margin-right: 1vw;
    }
</style>