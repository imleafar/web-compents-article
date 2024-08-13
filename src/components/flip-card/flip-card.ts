import styles from  "./flip-card.styles.scss";
import flipCardHtml from "./flip-card.html";

export class FlipCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const style = document.createElement('style');
    style.textContent = styles;
    const element = document.createElement("div");
    element.innerHTML = flipCardHtml;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(style.cloneNode(true));
    shadow.appendChild(element.cloneNode(true));
  }
}
