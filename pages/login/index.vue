<template>
    <div class="login-fullpage background-img">
        <div class="login-card">
            <nuxt-link class="home-link" to="/"><h1>TOTONOU</h1></nuxt-link>
            <form @submit.prevent="handleLogin" class="login-form">
                <h3>Log In</h3>

                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email" required>

                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password" required>

                <button>Continue</button>
                <h5 class="signup-text">Don't have an account yet?<nuxt-link class="signup-link" to="/signup"> Sign Up!</nuxt-link></h5>
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
        async handleLogin () {
            try {
                let userInfo = {
                    email: this.email,
                    password: this.password
                }
                await this.$store.dispatch('login', userInfo)
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
    .login-form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: auto;
    }
    .login-form h3 {
        margin: 1vh 0 3vh 0;
    }
    .login-form input {
        display: block;
        width: 100%;
        border: 2px solid #f2b9cc;
        border-radius: 4px;
        padding: 4px;
        margin: 4px 0;
    }
    .login-form button {
        display: block;
        width: 100%;
        border: none;
        border-radius: 4px;
        padding: 10px 0px;
        background-color: #f2b9cc;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        text-align: center;
        cursor: pointer;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        margin-top: 5vh;
    }
    .login-card {
        background: whitesmoke;
        width: 75%;
        margin: auto;
        padding-bottom: 5vh;
        box-shadow: 0 8px 20px 15px rgb(0 0 0 / 0.3);
        border-radius: 4px;
    }
    .background-img {
        background-image: url('/img/tropical.jpg');
        height: 100vh;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
    }
    .signup-text {
        align-self: center;
        margin-top: 2vh;
    }
    .signup-link {
        text-decoration: none !important;
        color: #ee81a5;
    }
</style>