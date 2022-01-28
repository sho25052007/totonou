import Vue from 'vue'

const options = {
  root: null, // default is null - sets as viewport
  threshold: 0, // default is 0 - % of el that needs to be intersected
  rootMargin: '-10px' // a margin on the intersection - like a buffer
}

const opacityNavbar = new IntersectionObserver(
  (entries, opacityNavbar) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        console.log(entry)
        // entry.target.classList.add('opaque')
        // opacityNavbar.unobserve(entry.target)
        // console.log(entry.target)
        } else {
        // entry.target.classList.remove('opaque')
      }
    })
  }, options)

Vue.directive('opacity-navbar', {
  bind: el => {
    // el.classList.add('transparent'
    console.log(el)
    opacityNavbar.observe(el)
  }
})