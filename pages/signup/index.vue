<template>
    <form @submit.prevent="handleSignup">
        <h2>Signup</h2>

        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required>

        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" required>

        <button>Signup</button>
        <div v-if="error">{{ error }}</div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async handleSignup () {
            try {
                let userInfo = {
                    email: this.email,
                    password: this.password
                }
                await this.$store.dispatch('signup', userInfo)
                this.$router.go(-1) //return back to prev route
            } catch (err) {
                this.error = err.message
            }
        }
    }

}
</script>

<style>

</style>