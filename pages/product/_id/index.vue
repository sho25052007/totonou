<template>
    <div class="full-page">
        <navbar @openCart="toggleCart"/>
        <product />
        <lightbox :lightboxCart="lightboxCart" @closeCart="toggleCart" @closeCartWithBg="closeCartWithBg"/>
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
        'lightbox' : require('@/components/CartPage/Lightbox.vue').default,
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
</style>