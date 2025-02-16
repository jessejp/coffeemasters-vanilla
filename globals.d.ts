import type { Store } from "./services/Store";
import type { RouterType } from "./services/Router";

type AppGlobal = {
  store: Store;
  router: RouterType;
};

declare global {
  interface Window {
    app: AppGlobal;
  }
}