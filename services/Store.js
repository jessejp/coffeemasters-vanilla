/**
 * @typedef {Object} Product
 * @prop {number} id
 * @prop {string} name
 * @prop {number} price
 * @prop {string} description
 * @prop {string} image
 */

/**
 * @typedef {Object} MenuItem
 * @prop {string} name
 * @prop {Product[]} products
 */

/**
 * @typedef {Object} Store
 * @property {MenuItem[] | null} menu
 */


const OriginalStore = {
    menu: null,
    cart: []
};

/** @type {Store} */
export const Store = new Proxy(OriginalStore, {
    set(target, property, value) {
        target[property] = value
        if (property == "menu") {
            window.dispatchEvent(new Event("appmenuchange"))
        }
        if (property == "cart") {
            window.dispatchEvent(new Event("appmenuchange"))
        }
        return true
    }
})