<template>
  <div class="header-section">
      <nuxt-link class="home-link" to="/"><h1>TOTONOU</h1></nuxt-link>
      <div class="header-options">
        <div class="auth-options" v-if="authIsReady">
            <!-- for logged in users -->
            <div v-if="user" class="auth-view">
                <div class="user-display">Logged in as {{ user.email }}</div>
                <button @click="handleLogout">Logout</button>
            </div>

            <!-- for logged out users -->
            <div v-if="!user" class="auth-view">
                <nuxt-link class="auth-link" to="/login"><h4>Login</h4></nuxt-link>
                <nuxt-link class="auth-link" to="/signup"><h4>Signup</h4></nuxt-link>
            </div>
        </div>

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
    // data() {
    //     return {
    //         user: this.$store.state.user,
    //         authIsReady: this.$store.state.authIsReady,
    //     }
    // },
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
        },
        user: {
            get() {
                return this.$store.getters.user
            }
        },
        authIsReady: {
            get() {
                return this.$store.getters.authIsReady
            }
        },

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
        },
        async handleLogout() {
            await this.$store.dispatch('logout')
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>
    .home-link, .shop-link, .auth-link {
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
    .cart-view, .auth-view {
        display: flex;
        align-items: center;
        margin-right: 2.5vw;
    }
    .cart-quantity, .auth-view h4 {
        padding: 0 1vw;
    }
</style>