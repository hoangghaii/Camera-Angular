import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductType } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';

@Component({
  selector: 'app-modal-product-type',
  templateUrl: './modal-product-type.component.html',
  styleUrls: ['./modal-product-type.component.scss'],
})
export class ModalProductTypeComponent implements OnInit {
  public productTypeForm!: FormGroup;
  public productType: ProductType[] = [];
  public submitted: boolean = false;

  @Input() open!: boolean;
  @Input() typeModal!: string;
  @Input() selectCurrent: any;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>();

  constructor(private fb: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
  }

  initForm(): void {
    this.productTypeForm = this.fb.group({
      id: [''],
      productTypeName: [
        '',
        [ValidatorService.required, ValidatorService.maxLength(30)],
      ],
      productTypeNote: [''],
      updatedAt: [''],
    });
  }

  get f() {
    return this.productTypeForm.controls;
  }

  closeModal(): void {
    this.submitted = false;
    this.productTypeForm.reset();
    this.confirm.emit({ open: false });
  }

  // handleCreate(): void {
  //   this.submitted = true;
  //   if (!this.productForm.valid) {
  //     return;
  //   }
  // }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      product_type_name: obj.productTypeName,
      productType_note: obj.productTypeNote,
      updated_at: obj.updatedAt,
    };
  }
}
