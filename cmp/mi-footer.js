class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Luis Enrique Palacios Castro.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
