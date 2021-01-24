import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../services';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-error-modal',
  template: `<app-error
    [msg]="msg"
    [isError]="isError"
    (confirm)="close($event)"
  ></app-error>`,
})
export class ModalComponent implements OnInit, OnDestroy {
  /**
   * Message content
   */
  public msg: any;

  /**
   * Show Error
   */
  public isError!: boolean;

  /**
   * Set more style
   */

  constructor(
    private modalService: ModalService,
    private router: Router
  ) // private authService: AuthService
  {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.modalService.add(this);
  }

  /**
   * Destroy component
   */
  ngOnDestroy(): void {
    this.modalService.remove();
  }

  /**
   * Open modal
   */
  open(): void {
    this.isError = true;
  }

  /**
   * Close modal
   */
  close(isError: any): void {
    this.isError = isError;
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['/login']);
    // }
  }
}
