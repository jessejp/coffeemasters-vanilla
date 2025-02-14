import { Store } from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import { Router } from "./services/Router.js";

window.app = {
    store: Store,
    router: Router
};

export const app = window.app;

window.addEventListener("DOMContentLoaded", async function () {
    loadData();
    app.router.init();
})