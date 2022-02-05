<template>
    <div class="display-section">
        <div class="image-1">
            <img class="parallax" id="pot3" src="/img/notpot3.jpg">
            <h1 class="img1txt" v-animate-on-scroll>NOTPOT ORANGE</h1>
            <h3 class="img1para" v-animate-on-scroll>Powerful Flavours, made purely by fruits - meaning there isn't anything artificial!</h3>
        </div>
        <div class="image-2">
            <img class="parallax" id="pot4" src="/img/notpot4.jpg">
            <h1 class="img2txt" v-animate-on-scroll>NOTPOT GREEN</h1>
            <h3 class="img1para" v-animate-on-scroll>Essential Vitamins and Minerals, to boost your day and help with recovery!</h3>
        </div>
        <div class="image-3">
            <img class="parallax" id="pot5" src="/img/notpot5.jpg">
            <h1 class="img3txt" v-animate-on-scroll>NOTPOT PINK</h1>
            <h3 class="img1para" v-animate-on-scroll>Active Ingredients that target immunity, sleep and gut health!</h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .display-section {
        height: auto;
        padding-top: 40px;
        margin-top: 10vh;
        margin-bottom: 5vh;
        background-color: whitesmoke;
        scroll-snap-align: start end;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1.img1txt, h1.img2txt, h1.img3txt {
        margin-top: 2vh;
        margin-bottom: 1vh;
    }

    .image-1, .image-2, .image-3 {
        height: 80vh;
        width: 90vw;
        flex-grow: 1;
        margin-bottom: 30vh;

        display: flex;
        /* align-items: end; */
        flex-direction: column;
    }

    img#pot3, img#pot4, img#pot5  {
        height: 100%;
        width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }

    .before-enter.enter {
        opacity: 1;
        transform: translateY(0);
    }
    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            /* transition: all 1.3s ease; */
    }

</style>