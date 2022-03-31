<template>
 <div class="featured-section">
    <div class="featured-title">
        <h1 v-animate-on-scroll>ALL THE FLAVOURS</h1>
        <h2 v-animate-on-scroll>5 Variety Flavours</h2>
    </div>

    <swiper class="swiper" :options="swiperOption">
        <feature-product
            v-for="product in this.$store.getters.products"
            :key="product.id"
            :product="product"
            />
    </swiper>
 </div>
</template>

<script>
export default {
    components: {
        'feature-product' : require('@/components/LandingPage/FeatureProduct.vue').default,
    },
    data() {
      return {
        swiperOption: {
          grabCursor: true,
          breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1.2,
            spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2.2,
            spaceBetween: 20
            },
            // when window width is >= 840px
            840: {
            slidesPerView: 3.2,
            spaceBetween: 20
            },
        }
        //   centeredSlides: true,
        }
      }
    }
}
</script>

<style scoped>
    .featured-section {
        scroll-snap-align: start end;
        background-color: whitesmoke;
        height: 100vh;
        margin: 0 5vw;
    }
    .featured-title {
        height: 10vh !important;
        margin-bottom: 5vh;
        padding-top: 40px;
    }
    .featured-title h1, .featured-title h2 {
        margin: 2vh 0;
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

    /* mobile media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) and (max-height: 40rem) {
        .featured-title h1, .featured-title h2 {
            margin: 3vh 0;
        }
    }

    /* mobile media query 800px = 50rem * 16px default font size */
    @media screen and (min-width: 30rem) and (max-width: 60rem) and (max-height: 40rem) {
        .featured-title {
            margin-bottom: 18vh;
        }
        .featured-title h1, .featured-title h2 {
            margin: 2vh 0;
        }
    }

    /* desktop narrow media query 800px = 50rem * 16px default font size */
    @media screen and (max-width: 60rem) and (min-height: 40rem) {
        .featured-title {
            margin-bottom: 6vh;
        }
        .featured-title h1, .featured-title h2 {
            margin: 2vh 0;
        }
    }

    /* desktop very narrow media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) and (min-height: 40rem) {
        .featured-title {
            margin-bottom: 6vh;
            font-size: 1rem;
        }
        .featured-title h1, .featured-title h2 {
            margin: 3vh 0;
        }
    }
</style>