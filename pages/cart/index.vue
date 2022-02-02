<template>
    <div class="full-page">
        <navbar />
        <cart />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Totonou',
            meta: [
                {
                    hid: 'description',
                name: 'description',
                content: 'Customizable Jewelry Organizer'
                }
            ]
        }
    },
    components: {
        'navbar' : require('@/components/AppHeader.vue').default,
        'cart' : require('@/components/CartPage/Cart.vue').default,
    }
}
</script>

<style>

</style>