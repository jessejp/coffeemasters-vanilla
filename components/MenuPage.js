export class MenuPage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })

        const styles = document.createElement("style")
        this.root.appendChild(styles)
        async function loadCSS() {
            const request = await fetch("/components/MenuPage.css")
            const stylesheet = await request.text();
            styles.textContent = stylesheet
        }
        loadCSS()
    }

    // when the component is attached to the DOM
    // so when our Router appends this element to the DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template")
        if (template instanceof HTMLTemplateElement) {
            const content = template.content.cloneNode(true)
            this.root.appendChild(content)
        }

        window.addEventListener("appmenuchange", () => {
            this.render()
        })
        this.render()
    }

    render() {
        const menu = this.root.querySelector("#menu");
        if (!window.app.store.menu) {
            menu.innerHTML = "Loading..."
        } else {
            menu.innerHTML = "" // clear first when using appendChild

            for (let category of window.app.store.menu) {
                const liCategory = document.createElement("li")
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class="category">
                    </ul>
                `

                category.products.forEach(product => {
                    const item = document.createElement("product-item")
                    item.dataset.product = JSON.stringify(product)
                    liCategory.querySelector("ul").appendChild(item)
                })

                menu.appendChild(liCategory)
            }
        }
    }
}