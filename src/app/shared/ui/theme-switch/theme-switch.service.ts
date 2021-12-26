import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class IwdfThemeSwitchService {
  private readonly SK = 'THEME-IS-DARK';
  private isDark = this.getStorageStatus();

  get body(): HTMLElement {
    return this.document.body;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    if (this.isDark) {
      this.addStyle('dark-theme');
    }
  }

  private setIsDark(val: boolean) {
    this.isDark = val;
  }

  getIsDark(): boolean {
    return this.getStorageStatus();
  }

  private getStorageStatus(): boolean {
    return localStorage.getItem(this.SK) === 'true';
  }

  private setStorageStatus(val: string): void {
    return localStorage.setItem(this.SK, val);
  }

  toggleTheme() {
    if (this.isDark) {
      this.removeStyle('dark-theme');
    } else {
      this.addStyle('dark-theme');
    }
  }

  private addStyle(key: string) {
    const href = `${key}.css`;
    this.renderer.setAttribute(this.getLinkElementForKey(key), 'href', href);
    this.renderer.addClass(this.body, key);
    this.setIsDark(true);
    this.setStorageStatus('true');
  }

  private removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.renderer.removeChild(document.head, existingLinkElement);
      this.renderer.removeClass(this.body, key);
      this.setIsDark(false);
      this.setStorageStatus('false');
    }
  }

  getLinkElementForKey(key: string) {
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

  private getClassNameForKey(key: string) {
    return `theme-switch-${key}`;
  }
}
