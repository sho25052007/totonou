<template>
  <!-- <div class="swiper-wrapper featured-section"> -->
<swiper class="swiper" :options="swiperOption">
      <swiper-slide class="featured-section feature-one">One</swiper-slide>
      <swiper-slide class="featured-section feature-two">Two</swiper-slide>
      <swiper-slide class="featured-section feature-three">Three</swiper-slide>
      <swiper-slide class="featured-section feature-four">Four</swiper-slide>
      <swiper-slide class="featured-section feature-five">Five</swiper-slide>
</swiper>
</template>

<script>
export default {
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
            spaceBetween: 30
            },
            // when window width is >= 840px
            840: {
            slidesPerView: 3.2,
            spaceBetween: 30
            },
        }
        //   centeredSlides: true,
        }
      }
    }
}
</script>

<style>
    .swiper-container {
        background-color: black;
        height: 100vh;
        scroll-snap-align: start;
    }
    .featured-section {
        height: 80% !important;
        padding: 40px;
    }
    .feature-one {
        background-color: aqua;
    }
    .feature-two {
        background-color: aquamarine;
    }
    .feature-three {
        background-color: turquoise;
    }
    .feature-four {
        background-color: teal;
    }
    .feature-five {
        background-color: lightblue;
    }
</style>