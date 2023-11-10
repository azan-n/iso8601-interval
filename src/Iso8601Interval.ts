import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class Iso8601Interval extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--iso8601-interval-text-color, #000);
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
