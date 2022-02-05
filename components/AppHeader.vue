<template>
  <div class="header-section">
      <nuxt-link class="home-link" to="/"><h1>TOTONOU</h1></nuxt-link>
      <div class="cart-view" v-if="totalQuantity > 0">
          <h4 style="cursor: pointer" @click="$emit('openCart')">View Cart</h4>
          <h4 class="cart-quantity">QTY:{{ totalQuantity }}</h4>
          <h4 class="cart-cost">£{{ totalCost }}</h4>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        totalQuantity: {
            get() {
                return this.$store.getters.totalQuantity
            }
        },
        totalCost: {
            get() {
                return this.$store.getters.totalCost
            }
        }
    }
}

</script>

<style scoped>
    .home-link {
        text-decoration: none !important;
        color: inherit;
    }
    .header-section {
        z-index: 5;
        width: 100vw;
        position: fixed;
        height: auto;
        transition: all 0.2s ease-in;
        background-color: transparent;

        display: flex;
        justify-content: space-between;
    }
    .header-section h1 {
        padding: 1vh 5vw;
    }
    .cart-view {
        display: flex;
        align-items: center;
        margin-right: 5vw;
    }
    .cart-quantity {
        padding: 0 1vw;
    }
</style>