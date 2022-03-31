<template>
    <div class="signup-fullpage background-img">
        <div class="signup-card">
            <nuxt-link class="home-link" to="/"><h1>TOTONOU</h1></nuxt-link>
            <form class="signup-form" @submit.prevent="handleSignup">
                <h3>Sign Up</h3>

                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email" required>

                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password" required>

                <button>Continue</button>
                <h5 class="login-text">Already got an account?<nuxt-link class="login-link" to="/login"> Log In!</nuxt-link></h5>
                <div v-if="error">{{ error }}</div>
            </form>
        </div>
    </div>
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

<style scoped>
    .home-link {
        text-decoration: none !important;
        color: inherit;
        display: flex;
        justify-content: center;
        margin: 5vh 0 2vh 0;
    }
    .signup-form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: auto;
    }
    .signup-form h3 {
        margin: 1vh 0 3vh 0;
    }
    .signup-form input {
        display: block;
        width: 100%;
        border: 2px solid #d9b425;
        border-radius: 4px;
        padding: 4px;
        margin: 4px 0;
    }
    .signup-form button {
        display: block;
        width: 100%;
        border: none;
        border-radius: 4px;
        padding: 10px 0px;
        background-color: #d9b425;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        text-align: center;
        cursor: pointer;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        margin-top: 5vh;
    }
    .signup-card {
        background: whitesmoke;
        width: 75%;
        margin: auto;
        padding-bottom: 5vh;
        box-shadow: 0 8px 20px 15px rgb(0 0 0 / 0.3);
        border-radius: 4px;
    }
    .background-img {
        background-image: url('/img/citrus.jpg');
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
    }
    .login-text {
        align-self: center;
        margin-top: 2vh;
    }
    .login-link {
        text-decoration: none !important;
        color: #cea813;
    }
</style>