<template>
  <div class="container">
      <nuxt />
  </div>
</template>


<script>
export default {
  created() {
      this.$store.dispatch('setCart')
    },
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

      /* overflow-x: hidden; */
    }
    body {
      /* overflow-x: hidden; */

      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;
      /* width: 100%; */
      /* position: relative; */
      background-color: whitesmoke;
    }
    body::-webkit-scrollbar {
      display: none;
    }
</style>