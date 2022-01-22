<template>
  <div class="featured-section">
      <div class="feature-one">One</div>
      <div class="feature-two">Two</div>
      <div class="feature-three">Three</div>
      <div class="feature-four">Four</div>
      <div class="feature-five">Five</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .featured-section {
        height: 100vh;
        background-color: azure;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        flex-wrap: nowrap;
        cursor: grab;
        scroll-snap-align: start;
    }
    .featured-section::-webkit-scrollbar {
        display: none;
    }
    .featured-section div {
        flex: 0 0 auto;
        padding: 40px;
        height: 100%;
        width: 40vw;
        scroll-snap-align: center;
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