import { db, storage, auth } from "~/plugins/firebase.js";
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, getDocs, getDoc } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export const strict = false

export const state = () => ({
    user: null,
    authIsReady: false,
    products: [
        // {
        //     id: 1,
        //     name: 'NotPot Orange',
        //     price: '8.80',
        //     description: 'This is an orange flavour vitamin',
        //     imageURL: 'notpot1.jpg'
        // },
        // {
        //     id: 2,
        //     name: 'NotPot Avocado',
        //     price: '9.15',
        //     description: 'This is an avocado flavour vitamin',
        //     imageURL: 'notpot3.jpg'
        // },
        // {
        //     id: 3,
        //     name: 'NotPot Aloe Vera',
        //     price: '7.00',
        //     description: 'This is an mango flavour vitamin',
        //     imageURL: 'notpot4.jpg'
        // },
        // {
        //     id: 4,
        //     name: 'NotPot Citrus',
        //     price: '6.50',
        //     description: 'This is an citrus flavour vitamin',
        //     imageURL: 'notpot5.jpg'
        // },
        // {
        //     id: 5,
        //     name: 'NotPot Tropical',
        //     price: '12.20',
        //     description: 'This is an tropical flavour vitamin',
        //     imageURL: 'notpot6.jpg'
        // },
    ],
    items: [],
    productById: {},
})

export const mutations = {
    setCart(state, items) {
        state.items = items
    },

    setProducts(state, article) {
        let matchProduct = state.products.find(product => product.id == article.id)
        if(!matchProduct) {
            state.products.push(article)
        }
    },

    setProductById(state, productArticle) {
        state.productById = productArticle
        console.log(state.productById)
    },

    setUser(state, payload) {
        state.user = payload
        // console.log(state.user)
    },

    setAuthIsReady(state, payload) {
        state.authIsReady = payload
        // console.log(state.authIsReady)
    }

    // addCart(state, cartItem) {
    //     state.items.push(cartItem)
    // },

    // addItem(state, cartItem) {
    //     let item = state.items.filter(item => item.name === cartItem.name)[0]
    //     item.quantity += cartItem.quantity
    //     item.cost = (Math.round((Number(item.cost) + Number(cartItem.cost)) * 100) / 100).toFixed(2)
    // },

    // updateCart(state, payload) {
    //     let item = state.items.filter(item => item.name == payload.name)[0]
    //     item.quantity = payload.quantity
    //     let itemCost = Number(item.price) * payload.quantity
    //     item.cost = (Math.round(itemCost * 100) / 100).toFixed(2)
    // },

    // deleteCart(state, payload) {
    //     let index = state.items.findIndex(item => item.name == payload.name)
    //     state.items.splice(index, 1)
    // },

}

export const actions = {
    setCart({commit}) {
        let colRef = collection(db, 'items')
        const unsub = onSnapshot(colRef, snapshot => {
            let items = []
            snapshot.docs.forEach(doc => {
                items.push({...doc.data(), id: doc.id})
            })
            commit('setCart', items)
        })
    },

    async setProducts({commit}) {
        let colRef = collection(db, 'products')
        const querySnapshot = await getDocs(colRef)
        querySnapshot.forEach((doc) => {
            const imageDownloadURL = getDownloadURL(ref(storage, `${doc.data().imageRef}`))
            .then( url => {
                // console.log(url)
                let article = ({
                    id: doc.id,
                    name: doc.data().name,
                    price: doc.data().price,
                    description: doc.data().description,
                    imageURL: url
                })
                commit('setProducts', article)
            })
        })
    },

    async getProductById({commit}, id) {
        let docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            const imageDownloadURL = getDownloadURL(ref(storage, `${docSnap.data().imageRef}`))
            .then( url => {
                let productArticle = ({
                    id: docSnap.id,
                    name: docSnap.data().name,
                    price: docSnap.data().price,
                    description: docSnap.data().description,
                    imageURL: url
                })
                // console.log(productArticle)
                commit('setProductById', productArticle)
            })
          } else {
            // doc.data() will be undefined in this case
            console.error("No such document!");
          }
    },

    // setUser({commit}) {
    //     let user = auth.currentUser
    //     // commit('setUser', user)
    //     onAuthStateChanged(auth, async(_user) => {
    //         // if(_user) {
    //             console.log('User state changed. Current user is:', _user)
    //             user = _user
    //             commit('setUser', _user)
    //         // }
    //     })
    // },

    async signup({commit}, userInfo) {
        const res = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        if (res) {
            commit('setUser', res.user)
        } else {
            throw new Error('could not complete sign up')
        }
    },

    async login ({commit}, userInfo) {
        const res = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        if (res) {
            commit('setUser', res.user)
        } else {
            throw new Error('could not complete login up')
        }
    },

    async logout({commit}) {
        await signOut(auth)
        // let user = null
        commit('setUser', null)
    },

    async addToCart({state}, payload) {
        let cartItem = {
            name: payload.name,
            imageURL: payload.imageURL,
            price: payload.price,
            cost: (Math.round((Number(payload.price) * payload.quantity) * 100) / 100).toFixed(2),
            quantity: payload.quantity
        }
        const colRef = collection(db, 'items')

        let matchItem = state.items.find(item => item.name == cartItem.name)

        if (matchItem) {
            const docRef = doc(db, 'items', matchItem.id)
            await updateDoc(docRef, {
                quantity: matchItem.quantity + cartItem.quantity,
                cost: (Math.round((Number(matchItem.cost) + Number(cartItem.cost)) * 100) / 100).toFixed(2)
            })
            // commit('addItem')
        } else {
            await addDoc(colRef, cartItem)
            // commit('addCart')
        }
    },

    async updateQuantityToItem({state}, payload) {
        let matchItem = state.items.find(item => item.name == payload.name)

        if (matchItem) {
            const docRef = doc(db, 'items', matchItem.id)
            await updateDoc(docRef, {
                quantity: payload.quantity,
                cost: (Math.round((Number(matchItem.price) * payload.quantity) * 100) / 100).toFixed(2),
            })
        }
        // commit('updateCart')
    },

    async deleteItem({state}, payload) {
        let matchItem = state.items.find(item => item.name == payload.name)

        if (matchItem) {
            const docRef = doc(db, 'items', matchItem.id)
            await deleteDoc(docRef)
        }
        // commit('deleteCart')
    }
}

export const getters = {
    user: (state) => {
        return state.user
    },
    authIsReady: (state) => {
        return state.authIsReady
    },
    cartItems: (state) => {
        return state.items
    },
    cartCount: (state) => {
        return state.items.length
    },
    products: (state) => {
        return state.products
    },
    totalQuantity: (state) => {
        let quantities = []
        state.items.forEach(item => quantities.push(item.quantity))
        return quantities.reduce((prevItem, accItem) => prevItem + accItem, 0)
    },
    totalCost: (state) => {
        let costs = []
        state.items.forEach(item => costs.push(Number(item.cost)))
        let sumCost = costs.reduce((prevCost, accCost) => prevCost + accCost, 0)
        return (Math.round(sumCost * 100) / 100).toFixed(2)
    }
}


