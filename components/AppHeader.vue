<template>
  <div class="header-section">
      <h1>TOTONOU</h1>
      <div class="cart-view" v-if="totalQty > 0">
          <h4>View Cart</h4>
          <div class="cart-quantity">QTY:{{ totalQty }}</div>
          <div class="cart-cost">£{{ totalCost }}</div>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        totalQty: {
            get() {
                return this.$store.getters.totalQty
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