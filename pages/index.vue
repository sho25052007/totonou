<template>
<div class="full-page">
    <navbar @openCart="toggleCart"/>
    <intro/>
    <display />
    <featured id="shop"/>
    <motto />
    <contact />
    <lightbox :lightboxCart="lightboxCart" @closeCart="toggleCart" @closeCartWithBg="closeCartWithBg"/>
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
    'navbar' : require('@/components/AppHeader.vue').default,
    'intro' : require('@/components/LandingPage/Intro.vue').default,
    'display' : require('@/components/LandingPage/Display.vue').default,
    'featured' : require('@/components/LandingPage/Featured.vue').default,
    'motto' : require('@/components/LandingPage/Motto.vue').default,
    'contact' : require('@/components/LandingPage/Contact.vue').default,
    'lightbox' : require('@/components/CartPage/Lightbox.vue').default,
  },
  beforeMount() {
    window.scrollTo(0,0);
  },
  mounted() {
    const intro = this.$el.querySelector('.intro-section')
    const header = this.$el.querySelector('.header-section')
    // console.log(intro)
    // console.log(header)

    const options = {
      root: null, // default is null - sets as viewport
      threshold: 0, // default is 0 - % of el that needs to be intersected
      rootMargin: '-20px' // a margin on the intersection - like a buffer
    }

    const opacityNavbar = new IntersectionObserver(
      (entries, opacityNavbar) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            console.log('intersected!!!')
            header.classList.add('opaque')
          } else {
            header.classList.remove('opaque')
          }
        })
      }, options)

      opacityNavbar.observe(intro)
  },
  data() {
    return {
        lightboxCart: false,
    }
  },
  methods: {
    toggleCart() {
        this.lightboxCart = !this.lightboxCart
    },
    closeCartWithBg() {
        if(this.lightboxCart) {
            this.lightboxCart = false
        }
    }
  },
}
</script>

<style scoped>
  .opaque {
    background-color: antiquewhite;
  }
</style>
