import { Store } from "./services/Store.js";
import { loadData } from "./services/Menu.js";

/**
 * @type {Object}
 * @property {import("./services/Store.js").StoreType} store
 */
const app = {
    store: Store
};

window.app = app;

window.addEventListener("DOMContentLoaded", async function () {
    loadData();
})