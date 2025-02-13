import { API } from "./API.js";

export async function loadData() {
    API.fetchMenu();
    window.app.store.menu = await API.fetchMenu();
}