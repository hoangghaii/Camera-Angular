import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  /**
   * Set item into local storage
   *
   * @param {string} key
   * @param {any} value
   *
   * @return void
   */
  setItem(key: string, value: any) {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }

  /**
   * Get item in storage
   *
   * @param {string} key
   *
   * @return Object|String|Number|any
   */
  getItem(key: string) {
    const value = localStorage.getItem(`${key}`);
    if (value && value !== 'undefined') {
      return JSON.parse(value);
    } else {
      return null;
    }
  }

  /**
   * Remove item in local storage
   *
   * @param {string} key
   *
   * @return void
   */
  remove(key: string) {
    localStorage.removeItem(`${key}`);
  }

  /**
   * Clear local storage
   */
  clearAll() {
    localStorage.clear();
  }
}
