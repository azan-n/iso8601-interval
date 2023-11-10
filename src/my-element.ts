import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('iso8601-interval-input')
export class Iso8601IntervalInput extends LitElement {
  static formAssociated = true;

  private internals: ElementInternals;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  override render() {
    return html`
      <input @input="${console.log(this.internals)}" />
    `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'iso8601-interval-input': Iso8601IntervalInput;
  }
}
