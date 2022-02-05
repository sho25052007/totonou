<template>
    <div class="cart-item-display">
        <img class="item-image" :src="item.imageURL">
        <div class="cart-item-details">
            <div class="item-detail">
                <h5 class="item-name">{{ item.name }}</h5>
                <h5 class="item-price">£{{ item.price }}</h5>
            </div>
            <div class="cart-update">
                <input type="number" min="0" max="99" class="item-quantity" v-model.number="productInfo.quantity">
                <h6 @click.stop="updateQuantity">Update Quantity</h6>
                <h5 class="item-cost">£{{ item.cost }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data () {
        return {
            productInfo: {
                quantity: null,
            }
        }
    },
    mounted() {
        this.productInfo.quantity = this.item.quantity
    },
    methods: {
        updateQuantity() {
            let payload = {
                name: this.item.name,
                quantity: this.productInfo.quantity
            }
            this.$store.dispatch('updateQuantityToItem', payload)
        }
    }
}
</script>

<style scoped>
    .cart-item-display {
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .item-image {
        height: 100px;
        width: 100px;
        object-fit: cover;
        margin: 10px;
    }
    .cart-item-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .item-detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .cart-update {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 10px;
        margin-left: 6vw;
    }
    .cart-update h6 {
        cursor: pointer;
        text-overflow: clip;
        white-space: nowrap;
    }
    .cart-update h5, .item-detail h5 {
        padding-top: 1vh;
    }
</style>