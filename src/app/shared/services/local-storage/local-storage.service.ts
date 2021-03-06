import { Injectable } from '@angular/core';

const APP_PREFIX = 'IWDF-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_PREFIX)) {
        const key = storageKey.replace(APP_PREFIX, '').toLowerCase();

        let currentStateRef = state;
        currentStateRef[key] = JSON.parse(
          localStorage.getItem(storageKey) || '{}'
        );

        currentStateRef[key] = currentStateRef[key] || {};
        currentStateRef = currentStateRef[key];
      }
      return state;
    }, {});
  }
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value as T));
  }

  getItem<T>(key: string): T | undefined {
    const data = localStorage.getItem(`${APP_PREFIX}${key}`);
    if (data) {
      return JSON.parse(data) as T;
    }
    return undefined;
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  /** Tests that localStorage exists, can be written to, and read from. */
  testLocalStorage() {
    const testValue = 'testValue';
    const testKey = 'testKey';
    const errorMessage = 'localStorage did not return expected value';

    this.setItem(testKey, testValue);
    const retrievedValue = this.getItem(testKey);
    this.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
