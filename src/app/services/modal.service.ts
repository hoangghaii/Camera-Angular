import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = [];

  constructor() {}

  add(modal: any): void {
    this.modals.push(modal);
  }

  remove(): void {
    this.modals = this.modals.splice(1, 1);
  }

  open(msg?: any): void {
    const modal: any = this.modals[0];
    if (msg) {
      modal.msg = msg;
    }
    modal.open();
  }

  close(): void {
    const modal: any = this.modals[0];
    modal.close();
  }
}
