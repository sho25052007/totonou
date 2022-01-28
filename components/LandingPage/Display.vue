<template>
    <div class="display-section">
        <div class="display-picture">
            <img id="pot3" v-animate-on-scroll src="~assets/img/notpot3.jpg">
            <img id="pot6" v-animate-on-scroll src="~assets/img/notpot6.jpg">
            <img id="pot5" v-animate-on-scroll src="~assets/img/notpot5.jpg">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
    .display-section {
        height: 200vh;
        padding-top: 40px;
        scroll-snap-align: start;
        position: relative;
    }
    img#pot3{
        width: 300px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 10%;
    }
    img#pot6{
        width: 300px;
        height: auto;
        position: absolute;
        left: 70%;
        top: 50%;
    }
    img#pot5{
        width: 300px;
        height: auto;
        position: absolute;
        left: 20%;
        top: 70%;
    }

    .before-enter.enter {
        opacity: 1;
        transform: translateY(0);
    }
    .before-enter {
        opacity: 0;
        transform: translateY(150px);
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            /* transition: all 1.3s ease; */
    }

</style>