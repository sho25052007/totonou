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
</style>