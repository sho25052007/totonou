<template>
    <swiper-slide class="featured-product">
        <img class="feature-image" :src="product.imageURL"/>
        <div class="featured-tag" v-animate-on-scroll>
            <h2>{{product.name}}</h2>
            <h3>£{{product.price}}</h3>
            <nuxt-link class="shop-btn" :to="`/product/${product.id}/`">SHOP NOW ></nuxt-link>
        </div>
    </swiper-slide>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style scoped>
    .feature-image {
        object-fit: cover;
        width: 100%;
        height: 65vh !important;
    }
    .featured-product {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5vh 0px;
    }
    .featured-tag {
        height: 20vh !important;
        background: transparent;
        padding: 0 10px;
        margin-top: 2vh;
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
        transform: translateY(50px);
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            /* transition: all 1.3s ease; */
    }
</style>