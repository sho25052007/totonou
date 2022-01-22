<template>
  <!-- <div class="swiper-wrapper featured-section"> -->
<swiper class="swiper" :options="swiperOption">
      <swiper-slide>
            <vue-freezeframe class="featured-product feature-one" src="https://media3.giphy.com/media/cnQhySv6fbDHiQGsU2/giphy.gif?cid=790b76116cf404432bed960b5520ad253c719b77d85b0ec3&rid=giphy.gif&ct=g" />
            <div class="featured-tag">Tag One</div>
      </swiper-slide>
      <swiper-slide>
            <vue-freezeframe class="featured-product feature-two" src="https://media2.giphy.com/media/lOULeMY5Bohs5yyuA2/giphy.gif?cid=790b761145295dcb6287a039b13cbba8cbe05110cd2a9d9d&rid=giphy.gif&ct=g" />
            <div class="featured-tag">Tag Two</div>
      </swiper-slide>
      <swiper-slide>
            <vue-freezeframe class="featured-product feature-three" src="https://media2.giphy.com/media/QVI7CPMig3JfKVraaX/giphy.gif?cid=790b76115fbc71ab42aa61ed986f5e15f034396bd8b896b4&rid=giphy.gif&ct=g" />
            <div class="featured-tag">Tag Three</div>
      </swiper-slide>
      <swiper-slide>
            <vue-freezeframe class="featured-product feature-four" src="https://media4.giphy.com/media/JoQ03rz8xRHEd8oRCs/giphy.gif?cid=790b7611b5fb72f6042bfd172bfce2cf18016b0b08bfc03b&rid=giphy.gif&ct=g" />
            <div class="featured-tag">Tag Four</div>
      </swiper-slide>
      <swiper-slide>
            <vue-freezeframe class="featured-product feature-five" src="https://media0.giphy.com/media/LQ3ZxeoAVqf38p2zbq/giphy.gif?cid=790b7611769186c69c0d28245d7140e7508b9373ee901f7d&rid=giphy.gif&ct=g" />
            <div class="featured-tag">Tag Five</div>
      </swiper-slide>
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

<style>
    .swiper-container {
        background-color: whitesmoke;
        height: 100vh;
        scroll-snap-align: start;
    }
    .featured-product {
        display: flex;
        align-items: center;
        height: 80% !important;
        padding-top: 40px;
    }
    .featured-tag {
        height: 20% !important;
        background: transparent;
    }
    .feature-one {
        background-color: #cb5c81;
    }
    .feature-two {
        background-color: #e1c838;
    }
    .feature-three {
        background-color: #8bd5d0;
    }
    .feature-four {
        background-color: #8be1cc;
    }
    .feature-five {
        background-color: #9fcbdb;
    }
</style>