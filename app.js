import { Store } from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import { Router } from "./services/Router.js";
import { CartItem } from "./components/CartItem.js";
import { MenuPage } from "./components/MenuPage.js"
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { ProductItem } from "./components/ProductItem.js";

window.app = {
    store: Store,
    router: Router
};

export const app = window.app;

window.addEventListener("DOMContentLoaded", async function () {
    loadData();
    app.router.init();
})

window.addEventListener("appcartchange", event => {  
    const badge = document.getElementById("badge")
    const quantity = app.store.cart.reduce((acc, item) => acc + item.quantity, 0)
    console.log(badge, quantity)
    badge.textContent = "" + quantity
    badge.hidden = quantity == 0
})

customElements.define("order-page", OrderPage)
customElements.define("cart-item", CartItem)
customElements.define("menu-page", MenuPage)
customElements.define("product-page", DetailsPage)
customElements.define("product-item", ProductItem)