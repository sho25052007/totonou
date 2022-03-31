<template>
  <div class="container">
      <!-- <nuxt /> -->
      <nuxt v-if="!loading"/>
      <div class="overlay" v-else>
        <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse size="3x" id="loading-icon"/>
      </div>
  </div>
</template>


<script>
import { auth } from "~/plugins/firebase.js";
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
export default {
  created() {
    this.loading = true
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
        .then(()=> {
          const guestUser = auth.currentUser
          this.$store.commit('setAuthIsReady', true)
          this.$store.commit('setUser', guestUser)
          setup()
        })
        .catch((err) => {
          console.error(err.message)
        })
      } else {
        this.$store.commit('setAuthIsReady', true)
        this.$store.commit('setUser', user)
        setup()
      }
    })
    const setup = async() => {
      this.$store.dispatch('setCart')
      this.$store.dispatch('setProducts')
      .finally(() => (this.loading=false))
    }
  },
  data() {
      return {
          loading: false,
      }
  },
  beforeDestroy() {
    if (this.$store.state('userItems') && this.$store.state('products')) {
      this.$store.dispatch('setCart')
      this.$store.dispatch('setProducts')
    }
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700&display=swap');

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    html {
      font-family: 'Raleway', sans-serif;

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
    .overlay {
      background: antiquewhite;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    #loading-icon {
      color: #f3771f;
    }
</style>