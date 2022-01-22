<template>
  <div class="header-section" :class="{'header-scrolled': isOpaque}">
      this is the header
  </div>
</template>

<script>
export default {
    data() {
        return {
            isOpaque: false
        }
    },
    methods: {
        handleScroll () {
        // Your scroll handling here
        if (window.scrollY >= window.innerHeight - 10) {
            console.log('scrolled to 100vh')
            this.isOpaque = true
        } else {
            this.isOpaque = false
        }
        // console.log(window.scrollY)
        // console.log(window.innerHeight)
        }
    },
    beforeMount () {
        window.scrollTo(0,0);
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}

</script>

<style>
    .header-section {
        z-index: 5;
        width: 100vw;
        position: fixed;
        height: 40px;
        background-color: transparent;
        transition: all 0.2s ease-in;
    }
    .header-section.header-scrolled {
        background-color: antiquewhite;
        transition: all 0.2s ease;
    }
</style>