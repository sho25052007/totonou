export const state = () => ({
    products: [
        {
            id: 1,
            name: 'NotPot Orange',
            price: '8.80',
            description: 'This is an orange flavour vitamin',
            imageURL: '/img/notpot1.jpg',
            gifURL: 'https://media3.giphy.com/media/cnQhySv6fbDHiQGsU2/giphy.gif?cid=790b76116cf404432bed960b5520ad253c719b77d85b0ec3&rid=giphy.gif&ct=g'
        },
        {
            id: 2,
            name: 'NotPot Avocado',
            price: '9.15',
            description: 'This is an avocado flavour vitamin',
            imageURL: '/img/notpot3.jpg',
            gifURL: 'https://media2.giphy.com/media/lOULeMY5Bohs5yyuA2/giphy.gif?cid=790b761145295dcb6287a039b13cbba8cbe05110cd2a9d9d&rid=giphy.gif&ct=g'
        },
        {
            id: 3,
            name: 'NotPot Aloe Vera',
            price: '7.00',
            description: 'This is an mango flavour vitamin',
            imageURL: '/img/notpot4.jpg',
            gifURL: 'https://media2.giphy.com/media/QVI7CPMig3JfKVraaX/giphy.gif?cid=790b76115fbc71ab42aa61ed986f5e15f034396bd8b896b4&rid=giphy.gif&ct=g'
        },
        {
            id: 4,
            name: 'NotPot Citrus',
            price: '6.50',
            description: 'This is an citrus flavour vitamin',
            imageURL: '/img/notpot5.jpg',
            gifURL: 'https://media4.giphy.com/media/JoQ03rz8xRHEd8oRCs/giphy.gif?cid=790b7611b5fb72f6042bfd172bfce2cf18016b0b08bfc03b&rid=giphy.gif&ct=g'
        },
        {
            id: 5,
            name: 'NotPot Tropical',
            price: '12.20',
            description: 'This is an tropical flavour vitamin',
            imageURL: '/img/notpot6.jpg',
            gifURL: 'https://media0.giphy.com/media/LQ3ZxeoAVqf38p2zbq/giphy.gif?cid=790b7611769186c69c0d28245d7140e7508b9373ee901f7d&rid=giphy.gif&ct=g'
        },
    ],
    items: [
        //{id: 5, name: 'NotPot Tropical', price: 12.2, quantity: 1}
    ],
})

export const mutations = {
    addToCart(state, cartItem) {
        state.items.push(cartItem)
    }
}

export const actions = {
    addToCart({state, commit}, productInfo) {
        let cartItem = {
            id: Date.now(),
            name: productInfo.name,
            imageURL: productInfo.imageURL,
            price: productInfo.price,
            cost: productInfo.price * productInfo.qty,
            qty: productInfo.qty
        }
        commit('addToCart', cartItem)
    }
}

export const getters = {
    totalQty: (state) => {
        let quantities = []
        state.items.forEach(item => quantities.push(item.qty))
        return quantities.reduce((prevItem, accItem) => prevItem + accItem, 0)
    },
    totalCost: (state) => {
        let costs = []
        state.items.forEach(item => costs.push(Number(item.cost)))
        let sumCost = costs.reduce((prevCost, accCost) => prevCost + accCost, 0)
        return (Math.round(sumCost * 100) / 100).toFixed(2)
    }
}