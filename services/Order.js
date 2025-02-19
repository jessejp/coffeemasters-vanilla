import { app } from "../app.js"
import { getProductItemById } from "./Menu.js"

export async function addToCart(id) {
    const product = await getProductItemById(id)
    const productInCart = app.store.cart.filter((item) => item.product.id == id)

    if (productInCart.length) {
        app.store.cart = app.store.cart.map(item => {
            if (item.product.id == id) {
                return { product: item.product, quantity: item.quantity + 1 }
            } else {
                return item
            }
        })
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }]
    }
}

export async function removeFromCart(id) {
    app.store.cart = app.store.cart.filter(p => p.product.id != id)
}