<template>
    <div class="lightbox-page">
        <div class="lightbox-bg"
        v-if="lightboxCart"
        @click="$emit('closeCartWithBg')"
        :class="{darkBg: lightboxCart}"
        >
        </div>
        <div class="lightbox"
            v-if="lightboxCart"
            :class="{visible: lightboxCart}">
            <cart />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LightBoxCart',
    props: ['lightboxCart'],
    // data() {
    //     return {
    //         lightboxCart: false,
    //     }
    // },
    components: {
        'cart' : require('@/components/CartPage/Cart.vue').default
    },
    // methods: {
    //     toggleCart() {
    //         this.lightboxCart = !this.lightboxCart
    //     },
    //     closeCartWithBg() {
    //         if(this.lightboxCart) {
    //             this.lightboxCart = false
    //         }
    //     }
    // }
}
</script>

<style>
    .lightbox {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 70%;
        opacity: 0;
        transition: 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1);
        z-index: 10;
    }
    .lightbox.visible {
        opacity: 1;
    }
    .lightbox-bg.darkBg {
        position: fixed;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 5;
    }
</style>