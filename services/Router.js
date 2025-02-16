
/**
 * @typedef {Object} RouterType
 * @property {() => void} init
 * @property {(route?: string, addToHistory?: boolean) => void} go
 */
/** @type {RouterType} */
export const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(
            (a) => {
                a.addEventListener("click", event => {
                    event.preventDefault()
                    const url = a.getAttribute("href");
                    console.log(event)
                    Router.go(url)
                })
            })

        // update page content from user navigating back via browser back button
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false)
        })

        // Load initial URL
        Router.go(location.pathname)

    },
    go: (route, addToHistory = true) => {
        console.log(`going to ${route}`)
        if (addToHistory) {
            history.pushState({ route }, "", route)
        }
        var pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page")
                break;
            case "/order":
                pageElement = document.createElement("order-page")
                break;
            default:
                if (route.startsWith("/details")) {
                    pageElement = document.createElement("details-page")
                    const paramId = route.substring(route.lastIndexOf("-") + 1)
                    pageElement.dataset.id = paramId;
                }
                break;
        }

        if (pageElement) {
            const main = document.querySelector("main")
            // remove previous elements
            main.innerHTML = ''

            main.appendChild(pageElement)

            // reset scroll
            window.scrollX = 0;
            window.screenY = 0;
        }
    }
}