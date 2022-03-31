<template>
    <div class="motto-section">
        <h1>The Best in Vitamins!</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .motto-section {
        background-image: url('/img/banana.jpg');
        height: 100vh;
        padding-top: 40px;
        background-size: cover;
        background-position: center;
        scroll-snap-align: start;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .motto-section h1 {
        font-size: 5rem;
        color: whitesmoke;
    }

    /* desktop narrow media query 800px = 50rem * 16px default font size */
    @media screen and (max-width: 60rem) {
        .motto-section h1 {
            font-size: 3rem;
        }
    }

    /* desktop very narrow media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) {
        .motto-section h1 {
            font-size: 1.8rem;
        }
    }
</style>