import type { StoreType } from "./services/Store";

type AppGlobal = {
    store: StoreType
}

declare global {
    interface Window { app: AppGlobal; }
}

declare var app: AppGlobal