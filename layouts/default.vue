<template>
  <div class="container">
      <!-- <nuxt /> -->
      <nuxt v-if="!loading"/>
      <div class="overlay" v-else>
        Loading...
      </div>
  </div>
</template>


<script>
import { auth } from "~/plugins/firebase.js";
import { onAuthStateChanged } from 'firebase/auth'
export default {
  created() {
    this.loading = true
    this.$store.dispatch('setCart')
    this.$store.dispatch('setProducts')
    .finally(() => (this.loading=false))

    const unsub = onAuthStateChanged(auth, (_user) => {
      this.$store.commit('setAuthIsReady', true)
      this.$store.commit('setUser', _user)
      unsub()
    })
  },
  data() {
      return {
          loading: false,
      }
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