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
    }
}

customElements.define("menu-page", MenuPage)