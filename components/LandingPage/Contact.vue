<template>
    <div class="contact-section">
        <div class="follow-us">
            <h1>FOLLOW US AT</h1>
            <h3>Instagram ></h3>
        </div>
        <div class="contact-us">
            <h1>CONTACT US AT</h1>
            <h3>Say Hello! ></h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contact-section {
        height: 50vh;
        background-color: whitesmoke;
        scroll-snap-align: start;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .follow-us, .contact-us {
        border: 1px solid black;
        width: 50%;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .follow-us h1, .contact-us h1 {
        margin: 2vh 0;
    }



    /* mobile media query landscape 800px = 50rem * 16px default font size */
    @media screen and (min-width: 30rem) and (max-width: 60rem) and (max-height: 40rem) {
        .follow-us h1, .contact-us h1 {
            margin: 1vh 0;
            font-size: 1.6rem;
        }
        .follow-us h3, .contact-us h3 {
            font-size: 1rem;
        }
    }

    /* desktop narrow media query 800px = 50rem * 16px default font size */
    @media screen and (max-width: 60rem) and (min-height: 40rem) {
        .follow-us h1, .contact-us h1 {
            margin: 1vh 0;
            font-size: 1.6rem;
        }
        .follow-us h3, .contact-us h3 {
            font-size: 1rem;
        }
    }

    /* desktop & mobile media query 480px = 30rem * 16px default font size */
    @media screen and (max-width: 30rem) and (min-height: 40rem) {
        .follow-us h1, .contact-us h1 {
            margin: 1vh 0;
            font-size: 1.2rem;
        }
        .follow-us h3, .contact-us h3 {
            font-size: 0.8rem;
        }
    }
</style>