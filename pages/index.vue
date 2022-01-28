<template>
<div class="full-page" v-opacity-navbar>
    <navbar />
    <intro />
    <display />
    <featured/>
    <description />
</div>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: 'Totonou',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Customizable Jewelry Organizer'
        }
      ]
    }
  },
  components: {
    'intro' : require('@/components/LandingPage/Intro.vue').default,
    'display' : require('@/components/LandingPage/Display.vue').default,
    'featured' : require('@/components/LandingPage/Featured.vue').default,
    'description' : require('@/components/LandingPage/Description.vue').default,
    'navbar' : require('@/components/AppHeader.vue').default,
  },
  mounted() {
    const intro = this.$el.querySelector('.intro-section')
    const header = this.$el.querySelector('.header-section')
    console.log(intro)
    console.log(header)

    const options = {
      root: null, // default is null - sets as viewport
      threshold: 0, // default is 0 - % of el that needs to be intersected
      rootMargin: '0px' // a margin on the intersection - like a buffer
    }

    const opacityNavbar = new IntersectionObserver(
      (entries, opacityNavbar) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            header.classList.add('opaque')
          } else {
            header.classList.remove('opaque')
          }
        })
      }, options)

      opacityNavbar.observe(intro)
  }
}
</script>

<style>
  .opaque {
    background-color: antiquewhite;
  }
</style>
