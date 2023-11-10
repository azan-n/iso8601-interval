import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Iso8601Interval } from '../src/Iso8601Interval.js';
import '../src/iso8601-interval.js';

describe('Iso8601Interval', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<Iso8601Interval>(html`<iso8601-interval></iso8601-interval>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<Iso8601Interval>(html`<iso8601-interval></iso8601-interval>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<Iso8601Interval>(html`<iso8601-interval header="attribute header"></iso8601-interval>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<Iso8601Interval>(html`<iso8601-interval></iso8601-interval>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
