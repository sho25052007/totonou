<template>
    <swiper-slide class="featured-product">
        <img class="feature-image" :src="product.imageURL"/>
        <div class="featured-tag" v-animate-on-scroll>
            <h2>{{product.name}}</h2>
            <h3>£{{product.price}}</h3>
            <nuxt-link class="shop-btn" :to="`/product/${product.id}/`">
                <button>Shop Here!</button>
            </nuxt-link>
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
        text-decoration: none;
    }
    .shop-btn button {
        display: block;
        width: 35%;
        border: 1px solid rgb(187, 187, 187, 0.4);
        border-radius: 20px;
        padding: 5px 0px;
        background-color: antiquewhite;
        box-shadow: 0 3px 10px rgb(170 170 170 / 0.4);
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        /* color: white; */
        font-weight: 600;
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

    /* mobile media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) {
        .shop-btn button {
            padding: 6px 0px;
        }
    }

    /* mobile media query 800px = 50rem * 16px default font size */
    @media screen and (min-width: 30rem) and (max-width: 60rem) and (max-height: 40rem) {
        .feature-image {
            height: 40vh !important;
        }
        .shop-btn button {
            padding: 6px 0px;
            font-size: 0.6rem;
        }
    }

    /* desktop narrow media query 800px = 50rem * 16px default font size */
    @media screen and (max-width: 60rem) and (min-height: 40rem) {
        .feature-image {
            height: 60vh !important;
        }
        .shop-btn button {
            padding: 6px 0px;
            font-size: 0.6rem;
        }
    }
</style>