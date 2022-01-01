import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { Theme } from '@api/models';

@Injectable({ providedIn: 'root' })
export class ThemePickerService {
  private renderer: Renderer2;
  private PREFIX = '-theme';
  current!: string;
  mainTheme = 'light';

  get body(): HTMLElement {
    return this.document.body;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init(theme: Theme) {
    if (this.mainTheme !== theme) {
      this.addStyle(`${theme}${this.PREFIX}`);
    }
    this.current = theme;
  }

  setStyle(theme: Theme) {
    if (this.current !== theme) {
      this.removeStyle(`${this.current}${this.PREFIX}`);
    }
    if (this.mainTheme === theme) {
      this.removeStyle(`${this.current}${this.PREFIX}`);
    }
    if (this.mainTheme !== theme) {
      this.addStyle(`${theme}${this.PREFIX}`);
    }

    this.current = theme;
  }

  private addStyle(key: string) {
    const href = `${key}.css`;
    this.renderer.setAttribute(this.getLinkElementForKey(key), 'href', href);
    this.renderer.addClass(this.body, key);
  }

  private removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.renderer.removeChild(document.head, existingLinkElement);
      this.renderer.removeClass(this.body, key);
    }
  }

  private getLinkElementForKey(key: string) {
    return (
      this.getExistingLinkElementByKey(key) ||
      this.createLinkElementWithKey(key)
    );
  }

  private getExistingLinkElementByKey(key: string) {
    return this.document.head.querySelector(
      `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
    );
  }

  private createLinkElementWithKey(key: string) {
    const linkEl = this.renderer.createElement('link');
    this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
    this.renderer.addClass(linkEl, this.getClassNameForKey(key));
    this.renderer.appendChild(this.document.head, linkEl);
    return linkEl;
  }

  getClassNameForKey(key: string) {
    return `iwdf-${key}`;
  }
}
