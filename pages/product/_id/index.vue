<template>
    <div class="full-page">
        <navbar />
        <product />
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
        'product' : require('@/components/ProductPage/Product.vue').default,
    }
}
</script>

<style>

</style>