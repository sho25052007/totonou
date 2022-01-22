<template>
  <div class="container">
      <AppHeader />
      <nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  components: {
    AppHeader,
  }
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
</style>