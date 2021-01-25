import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  /**
   * Message content
   */
  @Input() msg: any;

  /**
   * Show error
   */
  @Input() isError = false;

  /**
   * Event click
   */
  @Output() confirm: EventEmitter<boolean> = new EventEmitter(false);

  constructor() {}

  /**
   * Check type
   */
  // isString(val:any): boolean {
  //   return typeof val === 'string';
  // }

  /**
   * Get message
   */
  // getMsg(): (string | string[]) {
  //   if (typeof this.msg === 'string') {
  //     return this.msg;
  //   }
  //   if (typeof Array.isArray(this.msg)) {
  //     return this.msg;
  //   }
  // }
}
