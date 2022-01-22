<template>
  <div class="home-page">
    <Intro />
    <Featured v-dragscroll.x/>
    <Description />
    <div v-log-inner-text>Hello</div>
  </div>
</template>

<script>
import Intro from '@/components/LandingPage/Intro'
import Featured from '@/components/LandingPage/Featured'
import Description from '@/components/LandingPage/Description'

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
    Intro,
    Featured,
    Description,
  }
}
</script>

<style>
  .home-page {
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
  }
</style>
