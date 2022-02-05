<template>
    <div class="full-page">
        <navbar @openCart="toggleCart"/>
        <product/>
        <div class="lightbox-bg"
            v-if="lightboxCart"
            @click="closeCartWithBg"
            :class="{darkBg: lightboxCart}"
        >
        </div>
        <div class="lightbox"
            v-if="lightboxCart"
            :class="{visible: lightboxCart}">
            <cart
                @closeCart="toggleCart"/>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Totonou',
            meta: [
                {
                    hid: 'description',
                name: 'description',
                content: 'Customizable Jewelry Organizer'
                }
            ]
        }
    },
    data() {
        return {
            lightboxCart: false,
        }
    },
    components: {
        'navbar' : require('@/components/AppHeader.vue').default,
        'product' : require('@/components/ProductPage/Product.vue').default,
        'cart' : require('@/components/CartPage/Cart.vue').default,
    },
    methods: {
        toggleCart() {
            this.lightboxCart = !this.lightboxCart
        },
        closeCartWithBg() {
            if(this.lightboxCart) {
                this.lightboxCart = false
            }
        }
    }
}
</script>

<style scoped>
    .fullpage {
        position: relative;
        z-index: 0;
    }
    .lightbox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 70%;
        opacity: 0;
        transition: 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1);
        z-index: 4;
    }
    .lightbox.visible {
        opacity: 1;
    }
    .lightbox-bg.darkBg {
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
    }

</style>