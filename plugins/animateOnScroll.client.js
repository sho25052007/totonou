import Vue from 'vue'

const options = {
  root: null, // default is null - sets as viewport
  threshold: 0, // default is 0 - % of el that needs to be intersected
  rootMargin: '-10px' // a margin on the intersection - like a buffer
}

const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        // animateOnScrollObserver.unobserve(entry.target)
        // console.log(entry.target)
        } else {
        entry.target.classList.remove('enter')
      }
    })
  }, options)

Vue.directive('animate-on-scroll', {
  bind: el => {
    el.classList.add('before-enter')
    animateOnScrollObserver.observe(el)
  }
})