<template>
  <div class="container">
      <nuxt />
  </div>
</template>

<style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    html {
      scroll-snap-type: y proximity;
      scroll-behavior: smooth;
      overflow-x: hidden;
    }
    body {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;
      overflow-x: hidden;
      width: 100%;
      position: relative;
      background-color: whitesmoke;
    }
    body::-webkit-scrollbar {
      display: none;
    }
</style>