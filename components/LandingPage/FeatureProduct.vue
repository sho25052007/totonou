<template>
    <swiper-slide>
        <vue-freezeframe class="featured-product" :src="$store.state.products[`${product.id - 1}`].gifURL" />
        <div class="featured-tag">
            <h2 v-animate-on-scroll>{{$store.state.products[`${product.id - 1}`].name}}</h2>
            <h3 v-animate-on-scroll>£{{$store.state.products[`${product.id - 1}`].price}}</h3>
            <nuxt-link class="shop-btn" :to="`/product/${product.id}/`" v-animate-on-scroll>SHOP NOW ></nuxt-link>
        </div>
    </swiper-slide>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style scoped>
    .ff-image {
        background-size: cover;
        height: 100%;
    }
    .featured-product {
        height: 60vh !important;
        display: flex;
        align-items: center;
        margin: 2vh 0px;
    }
    .featured-tag {
        height: 20vh !important;
        background: transparent;
        padding: 0 10px;
        margin: 12vh 0px;
    }
    .shop-btn {
        display: flex;
        justify-content: flex-end;
        /* float: right; */
    }
    .before-enter.enter {
        opacity: 1;
        transform: translateY(0);
    }
    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            /* transition: all 1.3s ease; */
    }
</style>