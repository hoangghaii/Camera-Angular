import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  public submitted: boolean = false;

  @Input() open!: boolean;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>(false);

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.submitted = false;
    // this.productTypeForm.reset();
    this.confirm.emit({ open: false });
  }
}
