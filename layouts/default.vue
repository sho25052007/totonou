<template>
  <div class="container">
      <nuxt />
  </div>
</template>

<script>
export default {
}
</script>

<style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    html {
      scroll-snap-type: y proximity;
      scroll-behavior: smooth;
    }
    body {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;
    }
    body::-webkit-scrollbar {
      display: none;
    }
</style>