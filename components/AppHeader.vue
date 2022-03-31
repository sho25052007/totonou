<template>
  <div class="header-section">
      <nuxt-link class="home-link" to="/"><h1>TOTONOU</h1></nuxt-link>
      <div class="header-options">
        <div class="auth-options" v-if="authIsReady">
            <!-- for logged in users -->
            <div v-if="user && !user.isAnonymous" class="auth-view">
                <div class="user-display">
                    <h4>Logged in as "{{ user.email }}"</h4>
                </div>
                <button @click="handleLogout" class="tooltip">
                    <font-awesome-icon transform="grow-6" icon="fa-solid fa-arrow-right-from-bracket" id="logout-icon"/>
                    <h6 class="tooltiptext">Log Out</h6>
                </button>
            </div>

            <!-- for logged in guests -->
            <div v-if="user && user.isAnonymous" class="auth-view">
                <div class="user-display">
                    <h4>Logged in as Guest</h4>
                </div>
                <nuxt-link class="auth-link tooltip" to="/login">
                    <font-awesome-icon transform="grow-3" icon="fa-solid fa-arrow-right-to-bracket" id="login-icon"/>
                    <h6 class="tooltiptext">Log In</h6>
                </nuxt-link>
            </div>
        </div>

        <div class="cart-view" v-if="totalQuantity > 0">
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
            <font-awesome-layers full-width class="fa-1x tooltip">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" transform="down-1" style="cursor: pointer" @click="$emit('openCart')" id="cart-icon"/>
                <font-awesome-layers-text counter :value="totalQuantity" position="top-right" transform="shrink-5 right-26 down-4" id="cart-count"/>
                <h6 class="tooltiptext">Cart</h6>
            </font-awesome-layers>
            <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" style="cursor: pointer" @click="$emit('openCart')"/> -->
            <!-- <h4 class="cart-quantity">QTY:{{ totalQuantity }}</h4>
            <h4 class="cart-cost">£{{ totalCost }}</h4> -->
        </div>
        <nuxt-link
            class="shop-link tooltip"
            :to="{path: '/', hash: '#shop'}"
            @click.native="scroll('shop')">
            <font-awesome-icon icon="fa-solid fa-store" id="shop-icon"/>
            <h6 class="tooltiptext">Shop</h6>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         // user: this.$store.state.user,
    //         // authIsReady: this.$store.state.authIsReady,
    //         // totalQuantity: this.$store.getters.totalQuantity
    //     }
    // },
    computed: {
        totalQuantity: {
            get() {
                return this.$store.getters.totalQuantity
            }
        },
        // totalCost: {
        //     get() {
        //         return this.$store.getters.totalCost
        //     }
        // },
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
        margin-right: 5vw;
    }
    .auth-view button {
        background: none!important;
        border: none;
        padding: 0!important;
        cursor: pointer;
    }
    .cart-view, .auth-view {
        display: flex;
        align-items: center;
        margin-right: 2.5vw;
    }
    .cart-quantity, .auth-view h4, .auth-view .user-display {
        padding: 0 1vw;
    }
    .user-display h4 {
        font-weight: bold;
    }

    /* Tooltip container */
    .tooltip {
    position: relative;
    display: inline-block;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
    visibility: hidden;
    width: 40px;
    color: #000;
    text-align: center;
    padding: 1px 0;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -20px; /* Use half of the width (120/2 = 60), to center the tooltip */
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
    visibility: visible;
    }

    /* mobile media query 800px = 50rem * 16px default font size */
    @media screen and (max-width: 55rem) {
        .user-display h4 {
            font-size: 0.5rem;
        }
        /* #cart-icon, #login-icon, #logout-icon, #shop-icon {
            font-size: 0.8rem;
        } */
        #cart-count {
            font-size: 0.8rem;
        }
        .cart-view, .auth-view {
            margin-right: 3.5vw;
        }
    }

    /* desktop super narrow media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) and (min-height: 40rem) {
        #cart-icon, #login-icon, #logout-icon, #shop-icon {
            font-size: 0.8rem;
        }
    }
</style>