<template>
  <div class="header-section">
      <nuxt-link class="home-link" to="/"><h1>TOTONOU</h1></nuxt-link>
      <div class="header-options">
        <div class="cart-view" v-if="totalQuantity > 0">
            <h4 style="cursor: pointer" @click="$emit('openCart')">View Cart</h4>
            <h4 class="cart-quantity">QTY:{{ totalQuantity }}</h4>
            <h4 class="cart-cost">£{{ totalCost }}</h4>
        </div>
        <nuxt-link
            class="shop-link"
            :to="{path: '/', hash: '#shop'}"
            @click.native="scroll('shop')">
            <h4>Shop</h4>
        </nuxt-link>
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
    },
    methods: {
        scroll(anchorId) {
            if (this.$route.hash) {
                let anchor = document.querySelector(`#${anchorId}`)

                // Check if the anchor has been found
                if (anchor) {
                    window.scrollTo({
                    // Scroll so that the anchor is at the top of the view
                    top: anchor.getBoundingClientRect().top + window.pageYOffset
                    })
                }
            }
        }
    }
}

</script>

<style scoped>
    .home-link, .shop-link {
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
        align-items: center;
    }
    .header-section h1{
        padding: 1vh 5vw;
    }
    .header-options {
        display: flex;
        align-items: flex-start;
    }
    .shop-link h4 {
        margin-right: 5vw;
    }
    .cart-view {
        display: flex;
        align-items: center;
        margin-right: 2.5vw;
    }
    .cart-quantity {
        padding: 0 1vw;
    }
</style>