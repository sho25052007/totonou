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
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
export default {
  async created() {
    this.loading = true
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
        .then(()=> {
          const guestUser = auth.currentUser
          this.$store.commit('setAuthIsReady', true)
          this.$store.commit('setUser', guestUser)
          // console.log(guestUser.uid)
          // console.log('guest', [user.isAnonymous, user.uid])
          setup()
        })
        .catch((err) => {
          console.error(err.message)
        })
      } else {
        this.$store.commit('setAuthIsReady', true)
        this.$store.commit('setUser', user)
        // console.log('user', [user.isAnonymous, user.uid])
        setup()
      }
    })
    const setup = async() => {
      // console.log(this.$store.state.user)
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
</style>