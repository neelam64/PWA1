import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'PWA Demo';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = css`
   
  `;

  render() {
    return html`
      <header>

        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}
